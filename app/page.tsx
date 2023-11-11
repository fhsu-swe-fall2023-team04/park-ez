import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

export default async function Home() {
	const session = await getServerSession(authOptions)

	if (session?.user.phone===undefined && session?.user) {
		redirect('/sign-up')
	}
	return (
		<main className=' bg-slate-900 h-screen flex items-start justify-between px-8 pt-8'>
			Home
		</main>
	)
}
