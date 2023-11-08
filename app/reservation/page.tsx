import ParkingSpaceMap from '@/_components/ParkingSpaceMap'
import ParkingMap from '@/_models/ParkingMap'
import startDb from '@/_utils/startDb'
import axios from 'axios'

export default async function Reservation() {
	const parkingSpaces = await axios.get(`${process.env.URL}/api/parking-spaces`)

	const handleSubmit = async (fd: FormData) => {
		'use server'
		const datetime = fd.get('datetime')?.toString()
		const parkingSpace = fd.get('space')?.toString()

		console.log(datetime, parkingSpace)
	}

	return (
		<div className=' flex justify-evenly py-4 flex-wrap items-center '>
			<form className='flex' action={handleSubmit}>
				<div className=' space-y-4 w-full '>
					{/* datetime */}
					<div className=' '>
						<p className='py-2 text-2xl'>Date and Time</p>
						<div className=''>
							<input
								type='datetime-local'
								name='datetime'
								className='block w-[500px] rounded-lg p-2 text-xl bg-slate-800 text-white 	'
							/>
						</div>
					</div>
					{/* avail parking spaces */}
					<div>
						{' '}
						<p className=' text-2xl py-2'>Available parking spaces</p>
						<ul className=' w-[500px]  bg-slate-800 rounded-xl px-4 py-2 divide-y-2 divide-slate-400 overflow-scroll h-[70vh]'>
							{parkingSpaces.data.map((space: any) => (
								<li
									key={space._id}
									className='flex py-4 items-center justify-between  '
								>
									<input type='text' value={space._id} name='space' hidden />
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
				</div>
			</form>
			<ParkingSpaceMap />
			{/* <Payment /> */}
		</div>
	)
}
