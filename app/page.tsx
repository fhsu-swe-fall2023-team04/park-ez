import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  

    redirect('/sign-in')  
  
		return (
			<main className=' bg-slate-800 h-screen flex items-center justify-center'>
				Home Page
			</main>
		)
}
