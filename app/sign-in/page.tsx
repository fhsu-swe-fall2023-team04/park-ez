import GoogleButton from '@/_components/GoogleButton'
import {auth} from '@/_utils/firebase'
import {
	sendSignInLinkToEmail
} from 'firebase/auth'
import {getServerSession} from 'next-auth'

import {redirect} from 'next/navigation'
import {authOptions} from '../api/auth/[...nextauth]/options'

export default async function SignIn() {
	const session = await getServerSession(authOptions)
	if (session?.user) {
		redirect('/')
	}

	const actionCodeSettings = {
		// URL you want to redirect back to. The domain (www.example.com) for this
		// URL must be in the authorized domains list in the Firebase Console.
		url: `${process.env.URL}/signin-confirm`,
		// This must be true
		handleCodeInApp: true,
	}

	const signIn = async (fd: FormData) => {
		'use server'
		  const email = fd.get('email')?.toString()

			try {
				// await createUserWithEmailAndPassword(auth, email as string, 'somepassword')
				// console.log('User created successfully.')

				await sendSignInLinkToEmail(auth, email as string, actionCodeSettings)
				console.log('Sign-in link sent to email:', email as string)

				// Since this code is in a function triggered by a user event, we can assume it's client-side
				localStorage.setItem('emailForSignIn', email as string)
			} catch (error) {
				console.error('Error during sign-in:', error)
			}
	}

	return (
		<div className='bg-gray-50 dark:bg-gray-900 h-screen  '>
			<div className='flex flex-col h-screen items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
				{/* title */}
				<a
					href='#'
					className='flex items-center mb-6 text-3xl font-semibold text-gray-400 '
				>
					Welcome to ParkEZ
				</a>
				<div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
					<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
						{/* sign in to accout */}
						<h1 className='text-xl font-bold text-center text-gray-900 md:text-2xl dark:text-white'>
							Sign in to your account
						</h1>
						{/*  */}
						<form className='space-y-4 md:space-y-6 w-full' action={signIn}>
							{/* telphone */}
							<div>
								<input
									type='email'
									name='email'
									placeholder='Email'
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									required
								/>
							</div>
							{/* submite */}
							<button
								type='submit'
								className='w-full text-white bg-primary-600 hover:bg-primary-700 border border-slate-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
							>
								Sign in
							</button>
							<GoogleButton />
							<p className='mt-10 text-center text-sm text-gray-400'>
								Not a member?{' '}
								<button className='font-semibold leading-6 text-indigo-400 hover:text-indigo-300'>
									Sign Up
								</button>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
