

import ParkingSpaceMap from '@/_components/ParkingSpaceMap'
import ParkingMap from '@/_models/ParkingMap'
import startDb from '@/_utils/startDb'
import axios from 'axios'


export default async function Reservation() {
	const parkingSpaces = await axios.get(`${process.env.URL}/api/parking-spaces`)

	const handleSubmit = async (fd:FormData) => {
		'use server'
		console.log(fd.get('date')?.toString())
	}

	return (
		<div className=' flex space-x-4 px-4 flex-wrap justify-center'>
			<form className='flex space-x-10' action={handleSubmit}>
				<div className=' '>
					<p className='py-2 text-2xl'>Date and Time</p>
					<div className=' space-y-2'>
						<input
							type='datetime-local'
							name='date'
							className='block w-full rounded-lg p-2 text-xl bg-slate-800 text-white 	'
						/>
					</div>
				</div>
				<div>
					{' '}
					<p className=' text-2xl py-2'>Available parking spaces</p>
					<ul className=' bg-slate-800 rounded-xl px-4 py-2 divide-y-2 divide-slate-400 overflow-scroll h-[65vh]'>
						{parkingSpaces.data.map((space: any) => (
							<li
								key={space._id}
								className='flex py-4 items-center justify-between  '
							>
								<input type="text" name={space._id} hidden />
								<div className='[&>*]:block'>
									<big>{space.distance} ft away</big>
									<small className=' text-slate-400'>
										Level {space.level} - Space {space.number}
									</small>
								</div>
								<button
									type='submit'
									className=' bg-green-500 px-4 py-2 rounded'
								>
									Go
								</button>
							</li>
						))}
					</ul>
				</div>
			</form>
			<ParkingSpaceMap />
			{/* <Payment /> */}
		</div>
	)
}
