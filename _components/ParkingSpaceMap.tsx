import React from 'react'

export default function ParkingSpaceMap() {
	let divs = []
	for (let i = 0; i < 50; i++) {
		divs.push(<div key={i} className='m-4 h-4 w-4 bg-green-500 '></div>)
	}

	return (
		<div className=' flex-1'>
			<p className=' text-2xl py-2 ml-8'>Parking Space Map</p>

			<div className='mx-8  space-y-8'>
				<div className=' text-center flex justify-evenly flex-wrap w-[50vw] rounded-xl bg-slate-800 p-2'>
					<big className='block w-full'>Level A</big>
					{divs}{' '}
				</div>
				<div className=' text-center flex justify-evenly flex-wrap w-[50vw] rounded-xl bg-slate-800 p-2'>
					<big className='block w-full'>Level B</big>
					{divs}{' '}
				</div>
				<div className=' text-center flex justify-evenly flex-wrap w-[50vw] rounded-xl bg-slate-800 p-2'>
					<big className='block w-full'>Level C</big>
					{divs}{' '}
				</div>
			</div>
		</div>
	)
}
