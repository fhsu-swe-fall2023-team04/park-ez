import React from 'react'

export default function ParkingSpaceMap() {
	return (
		<div className=' flex-1'>
			<p className=' text-2xl py-2 ml-8'>Parking Space Map</p>

			<div className='mx-8  space-y-4'>
				<div className=' max-w-[50vw] rounded-xl bg-slate-800 h-[25vh] flex items-center justify-center'>
					<big>Level A</big>
				</div>
				<div className=' max-w-[50vw] rounded-xl bg-slate-800 h-[25vh] flex items-center justify-center'>
					<big>Level B</big>
				</div>
				<div className=' max-w-[50vw] rounded-xl bg-slate-800 h-[25vh] flex items-center justify-center'>
					<big>Level C</big>
				</div>
			</div>
		</div>
	)
}
