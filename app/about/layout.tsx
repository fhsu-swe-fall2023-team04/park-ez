import Link from 'next/link'
import React, { ReactNode } from 'react'

export default function AboutLayout({ children }: { children: ReactNode }) {
	return (
		<div className=' flex justify-between px-4'>
			<div className=' py-8 w-full'>
				<ul className=' space-y-4'>
					<Link href='/about/about-us'>
						<li className='flex space-x-8'>
							<div className='w-2 rounded bg-teal-500  '></div>
							<h1 className=' text-2xl py-4'>About Us</h1>
						</li>
					</Link>
					<Link href='/about/how-to-use'>
						<li className='flex space-x-8'>
							<div className='w-2 rounded '></div>
							<h1 className=' text-2xl py-4'>How to use Park EZ</h1>
						</li>
					</Link>
				</ul>
			</div>
			<div className=' w-[200vw]'>{children}</div>
		</div>
	)
}
