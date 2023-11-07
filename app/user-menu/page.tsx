import React from 'react'

export default function Menu() {
	return (
		<div>
			<div>
				<ul className=' [&>li]:py-4 [&>li]:px-4  [&>li]:text-lg'>
					<li className='flex space-x-2'>
						<p>Find Space</p>
					</li>
					<li className='flex space-x-2'>
						<p>My Reservations</p>
					</li>
					<li className='flex space-x-2'>
						<p>My Wallet</p>
					</li>
					<li className='flex space-x-2'>
						<div className=' w-1 rounded bg-teal-500'></div>
						<p>Profile Settings</p>
					</li>
				</ul>
			</div>
			<div></div>
			<div></div>
		</div>
	)
}
