import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import '../_styles/globals.css'
import Header from '@/_components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'ParkEZ',
	description:
		'Introducing ParkEZ, the go-to app for effortlessly conquering the urban parking puzzle. No more circling the block endlessly or facing the anxiety of finding parking in busy city centers. With ParkEZ, your parking hassles become a thing of the past.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html className='n ' lang='en'>

			<body
				className={`${inter.className} bg-slate-900 text-white h-full w-screen`}
			>
				<nav>
					<Header />
				</nav>
				{children}
			</body>
		</html>
	)
}
