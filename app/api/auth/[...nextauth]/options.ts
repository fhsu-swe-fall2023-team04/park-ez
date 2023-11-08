
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from "next-auth/providers/email";
import startDb from '@/_utils/startDb';
import Customer from '@/_models/Customer';
import {ObjectId} from 'mongoose';



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

        // EmailProvider({
        //     server: {
        //         host: process.env.EMAIL_SERVER_HOST,
        //         port: process.env.EMAIL_SERVER_PORT,
        //         auth: {
        //             user: process.env.EMAIL_SERVER_USER,
        //             pass: process.env.EMAIL_SERVER_PASSWORD
        //         },
        //         from: process.env.EMAIL_FROM
        //     }
        // })
	],
	callbacks: {

		async jwt({ token, user }) {
			if (user) {
				token.id = user.id
			}
			return token
		},
		async session({ session, token }) {
			await startDb()

			const sessionUser = await Customer.findOne({
				'email': session.user?.email
			})

			if (session?.user && sessionUser) {
				session.user._id = sessionUser?._id
				session.user.phone = sessionUser?.phone as string
				session.user.vehicles = sessionUser?.vehicles as [ObjectId]
				session.user.reservations = sessionUser?.reservations as [ObjectId]
				session.user.transactions = sessionUser?.transactions as [ObjectId]
				session.user.paymentMethod = sessionUser?.paymentMethod as string

			}
			return session
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
}
