import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import '../_styles/globals.css'
import Providers from '@/_utils/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Parking Garage App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<Providers>
				<body className={`${inter.className} text-white`}>{children}</body>
			</Providers>
		</html>
	)
}
