'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

export default function Menu({ children }: { children: ReactNode }) {
	const pathname = usePathname()
	return (
		<div className=' flex justify-between px-4'>
			<div className=' py-8 w-full'>
				<ul className=' space-y-4'>
					<Link href='/parking-space'>
						<li className='flex space-x-8'>
							<div
								className={`${
									pathname === '/parking-space' ? '' : 'hidden'
								} p-1 bg-teal-500 rounded w-2  my-2 ease-in-out`}
							></div>
							<h1 className=' text-2xl py-4'>Find Space</h1>
						</li>
					</Link>
					<Link href='/user-menu/my-reservations'>
						<li className='flex space-x-8'>
							<div
								className={`${
									pathname === '/user-menu/my-reservations' ? '' : 'hidden'
								} p-1 bg-teal-500 rounded w-2 my-2 ease-in-out`}
							></div>
							<h1 className=' text-2xl py-4'>My Reservations</h1>
						</li>
					</Link>
					<Link href='/user-menu/wallet'>
						<li className='flex space-x-8'>
							<div
								className={`${
									pathname === '/user-menu/wallet' ? '' : 'hidden'
								} p-1 bg-teal-500 rounded w-2  my-2 ease-in-out`}
							></div>
							<h1 className=' text-2xl py-4'>My Wallet</h1>
						</li>
					</Link>
					<Link href='/user-menu/settings'>
						<li className='flex space-x-8'>
							<div
								className={`${
									pathname === '/user-menu/settings' ? '' : 'hidden'
								} p-1 bg-teal-500 rounded w-2  my-2 ease-in-out`}
							></div>
							<h1 className=' text-2xl py-4'>Profile Settings</h1>
						</li>
					</Link>
				</ul>
			</div>
			<div className=' w-[200vw]'>{children}</div>
		</div>
	)
}
