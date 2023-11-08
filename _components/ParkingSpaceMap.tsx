import axios from 'axios'
import React from 'react'

export default async function ParkingSpaceMap() {
	const parkingSpaces = await axios.get(`${process.env.URL}/api/parking-spaces`)


	const renderSpaces = (level: string) => {
		// Assuming the parkingSpaces data is an array of objects with a 'level' property
		const spaces = parkingSpaces.data
			? parkingSpaces.data.filter((space: {level: string}) => space.level === level)
			: []

		return spaces.map(( space: {status: string},index: any) => 
			(
				<div
					key={index}
					className={`m-[7%] h-6 w-6 ${
						space.status === 'Available' ? 'bg-green-500' : 'bg-red-500'
					} rounded`}
				></div>
			)
		)
	}

	return (
		<div className=''>
			<p className=' text-2xl py-2 ml-8'>Parking Space Map</p>

			<div className='mx-8 space-y-8'>
				{['A', 'B', 'C'].map((level) => (
					<div
						key={level}
						className='text-center flex justify-evenly flex-wrap min-w-[500px] rounded-xl bg-slate-800 p-2'
					>
						<big className='block w-full'>Level {level}</big>
						{renderSpaces(level)}{' '}
					</div>
				))}
			</div>
		</div>
	)
}
