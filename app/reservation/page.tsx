import ParkingSpaceMap from '@/_components/ParkingSpaceMap'
import {getServerSession} from 'next-auth'
import {revalidateTag} from 'next/cache'
import {redirect} from 'next/navigation'
import {authOptions} from '../api/auth/[...nextauth]/options'

export default async function Reservation() {

	const session = await getServerSession(authOptions)
	if (!session?.user.phone) {
		redirect('/')
	}

	const reservations = await fetch(
		`${process.env.URL}/api/reservations/customer/${session.user._id}`,
		{
			cache: 'no-cache',
			next: {tags: ['reservations']},
		}
	)
		.then((res) =>  res.json())
		.catch((err) => console.error(err))
console.log(reservations)
	const inProgressReservation = reservations?.find(
		(reservation: { inProgress: boolean }) => {
			return reservation.inProgress === true
		}
	)

	// if there is a reservation in progress redirect!
	if (inProgressReservation) {
		redirect(`/reservation/${inProgressReservation._id}`)
	}

	// all parking spaces
	const parkingSpaces = await fetch(`${process.env.URL}/api/parking-spaces`, {
		cache: 'no-cache',
		next: { tags: ['parking-spaces'] },
	})
		.then((res) => res.json())
		.catch((err) => console.error(err))

	// available spaces
	const availableParking = parkingSpaces.filter((parking: any) => {
		return parking.status === 'Available'
	})

	const handleSubmit = async (fd: FormData) => {
		'use server'
		const session = await getServerSession(authOptions)
		const user = session?.user

		const entryTime = fd.get('datetime')?.toString()
		const exitTime = Date.now()
		const parkingSpace = fd.get('space')?.toString()
		const customer = user?._id
		const vehicle = user?.vehicle
		const rate = {
			ratePerHour: 5,
			ratePerDay: 20,
		}

		const reservation = {
			parkingSpace,
			customer,
			vehicle,
			rate,
			entryTime,
			exitTime,
		}

		const res = await fetch(`${process.env.URL}/api/reservations`, {
			method: 'POST',
			body: JSON.stringify(reservation),
		})
			.then((res) => {
				revalidateTag('parking-spaces')
				revalidateTag('reservations')
				return res.json()
			})
			.catch((err) => {
				console.error(err)
			})
		redirect(`/reservation/${res._id}`)
	}

	return (
		<div className=' flex justify-evenly py-4 flex-wrap items-center '>
			<form className='flex' action={handleSubmit}>
				<div className=' space-y-4 w-full '>
					<div className=' '>
						{/* date and time */}
						<p className='py-2 text-2xl'>Date and Time</p>
						<div className=''>
							<input
								type='datetime-local'
								name='datetime'
								className='block w-[500px] rounded-lg p-2 text-xl bg-slate-800 text-white 	'
								required
							/>
						</div>
					</div>
					{/* avail parking spaces */}
					<div>
						{' '}
						<p className=' text-2xl py-2'>Available parking spaces</p>
						<ul className=' w-[500px]  bg-slate-800 rounded-xl px-4 py-2 divide-y-2 divide-slate-400 overflow-scroll h-[70vh]'>
							{availableParking.map((space: any, index: any) => (
								<li
									key={index}
									className='flex py-4 items-center justify-between  '
								>
									{/* its messing up because fd.get('space') is referrring to all of them
									hence it chooses the first one, maybe convert to client component
									*/}
									{/* <input
										type='radio'
										defaultValue={space._id}
										name='space'
									/> */}
									<div className='[&>*]:block'>
										<big>{space.distance} ft away</big>
										<small className=' text-slate-400'>
											Level {space.level} - Space {space.number}
										</small>
									</div>
									<button
										type='submit'
										value={space._id}
										name='space'
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
