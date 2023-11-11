import { ObjectId } from 'mongoose'
import React from 'react'

export default async function ParkingSpaceMap() {
	const parkingSpaces = await fetch(`${process.env.URL}/api/parking-spaces`)
		.then((res) => res.json())
		.catch((err) => console.log(err))

	const renderSpaces = (level: string) => {
		// Assuming the parkingSpaces data is an array of objects with a 'level' property
		const spaces = parkingSpaces
			? parkingSpaces.filter(
					(space: { level: string }) => space.level === level
			  )
			: []

		return spaces.map(
			(
				space: {
					_id: ObjectId
					status: string
					distance: number
					level: String
					number: number
				},
				index: any
			) => (
				<div
					key={index}
					className={`m-2 ${
						space.status === 'Available' ? 'bg-green-500' : 'bg-red-500'
					} rounded p-2`}
				>
					<p>
						{space.level} -{' '}
						{space.number.toLocaleString('en-US', {
							minimumIntegerDigits: 2,
							useGrouping: false,
						})}
					</p>
				</div>
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
						className='text-center flex-wrap flex justify-evenly  max-w-[450px] rounded-xl bg-slate-800 p-2'
					>
						<big className='block w-full'>Level {level}</big>
						{renderSpaces(level)}{' '}
					</div>
				))}
			</div>
		</div>
	)
}
