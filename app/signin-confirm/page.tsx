'use client'
import { auth } from '@/_utils/firebase'
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import {useEffect} from 'react'

export default function SigninConfirm() {

	const router = useRouter()

	useEffect(() => {
		// Since useEffect runs on the client, 'window' is available here
		if (isSignInWithEmailLink(auth, window.location.href)) {
			// If no email, redirect to sign-in page or handle accordingly
			const email =
				window.localStorage.getItem('emailForSignIn') ||
				'default_email@example.com'

			signInWithEmailLink(auth, email, window.location.href)
				.then(async (result) => {
					await signIn('credentials', {
						user: JSON.stringify(result.user),
						redirect: true,
						callbackUrl: '/',
					}).then((res) => console.log(res))
					// Handle the success case, maybe redirect the user or store the session
					console.log('Successfully signed in with email link', result)
					router.push('/') // Redirect to home page or dashboard
				})
				.catch((error) => {
					console.error('Error signing in with email link', error)
					// Handle errors here, such as displaying a message to the user
				})
		}
	}, [router]) // Empty dependency array means this effect runs once on component mount

	// Render your component or return null if nothing should be rendered
	return null

	return (
		<>
			<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>

					<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white'>
						Sign in to your account
					</h2>
					<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm  text-center text-white'>
						Checking code...
					</div>
				</div>
			</div>
		</>
	)
}
