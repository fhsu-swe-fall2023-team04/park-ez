
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import Customer from '@/_models/Customer';
import {ObjectId} from 'mongoose';
import startDb from '@/_utils/startDb'



export const authOptions: NextAuthOptions = {
	pages: {
		signIn: '/sign-in',
	},
	session: {
		strategy: 'jwt',
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
			authorization: {
				params: {
					prompt: 'consent',
					access_type: 'offline',
					response_type: 'code',
				},
			},
		}),
 		CredentialsProvider({
			name: 'Credentials',
			credentials: {},
			async authorize(credentials: any): Promise<any> {
				const user = JSON.parse(credentials.user);
				if (user) {
					console.log(user)
				return user;
				}
				return null;
			}
    })
	],
	callbacks: {

		async jwt({ token, user }) {
			if (user) {
				token.id = user.id
			}
			return token
		},
		async session({ user,session, token }) {
			
			await startDb()
			const sessionUser = await Customer.findOne({
				'email': session.user?.email.toLowerCase()
			})
			console.log(sessionUser)

			if (session?.user && sessionUser) {
				session.user._id = sessionUser?._id
				session.user.phone = sessionUser?.phone
				session.user.vehicle = sessionUser?.vehicle
				session.user.reservations = sessionUser?.reservations
				session.user.transactions = sessionUser?.transactions
				session.user.paymentMethod = sessionUser?.paymentMethod

			}
			return session
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
}
