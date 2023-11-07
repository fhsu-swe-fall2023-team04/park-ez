'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React, { ReactNode } from 'react'

export default function AboutLayout({children}: {children: ReactNode}) {
	const pathname = usePathname()
	return (
		<div className=' flex justify-between px-4'>
			<div className=' py-8 w-full'>
				<ul className=' space-y-4'>
					<Link href='/about/about-us'>
						<li className='flex space-x-8'>
							<div
								className={`${
									pathname === '/about/about-us' ? '' : 'hidden'
								}w-2 rounded bg-teal-500 my-2 `}
							></div>
							<h1 className=' text-2xl py-4'>About Us</h1>
						</li>
					</Link>
					<Link href='/about/how-to-use'>
						<li className='flex space-x-8'>
							<div className={`${pathname === '/about/how-to-use' ? '' : 'hidden'
								}w-2 rounded bg-teal-500 my-2`}></div>
							<h1 className=' text-2xl py-4'>How to use Park EZ</h1>
						</li>
					</Link>
				</ul>
			</div>
			<div className=' w-[200vw]'>{children}</div>
		</div>
	)
}
