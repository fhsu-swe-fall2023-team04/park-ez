
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from "next-auth/providers/email";
import startDb from '@/_utils/startDb';
import Customer from '@/_models/Customer';



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
		 async signIn({ account, profile }) {
			console.log(account,profile)

      
      return true // Do different verification for other providers that don't have `email_verified`
    },
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

			if (sessionUser) {
				session.user._id = sessionUser?._id
				session.user.phone = sessionUser.phone
				session.user.vehicles = sessionUser.vehicles
				session.user.paymentMethod = sessionUser.paymentMethod

			}
			return session
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
}
