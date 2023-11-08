import React from 'react'

export default function ParkingSpaceMap() {
	let divs = []
	for (let i = 0; i < 10; i++) {
		divs.push(<div key={i} className='m-[7%] h-6 w-6 bg-green-500 rounded'></div>)
	}

	return (
		<div className=''>
			<p className=' text-2xl py-2 ml-8'>Parking Space Map</p>

			<div className='mx-8  space-y-8'>
				<div className=' text-center flex justify-evenly flex-wrap min-w-[500px] rounded-xl bg-slate-800 p-2'>
					<big className='block w-full'>Level A</big>
					{divs}{' '}
				</div>
				<div className=' text-center flex justify-evenly flex-wrap min-w-[500px] rounded-xl bg-slate-800 p-2'>
					<big className='block w-full'>Level B</big>
					{divs}{' '}
				</div>
				<div className=' text-center flex justify-evenly flex-wrap min-w-[500px] rounded-xl bg-slate-800 p-2'>
					<big className='block w-full'>Level C</big>
					{divs}{' '}
				</div>
			</div>
		</div>
	)
}
