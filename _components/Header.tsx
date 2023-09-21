import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MenuButton from './MenuButton'
import car from '../_media/images/car-icon.png'

export default function Header() {
	return (
		<div className=' bg-slate-800 '>
			<ul className=' flex items-center justify-evenly bg-slate-800'>
				<Link href='/'>
					<li className=' flex items-center space-x-2'>
						<Image className='mr-2' src={car} height={100} width={100} alt='logo' />
                        
					</li>
				</Link>
				<Link href='/parking-space'>
					<li>Home</li>
				</Link>
				<Link href='/parking-space'>
					<li>Parking</li>
				</Link>
				<Link href='/about/about-us'>
					<li>About Us</li>
				</Link>
				<Link href='/user-menu'>
					<li>
						<MenuButton />
					</li>
				</Link>
			</ul>
		</div>
	)
}
