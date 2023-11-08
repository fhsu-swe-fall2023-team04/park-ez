import TimeElapsedCounter from '@/_components/TimeElapsedCounter'
import {ObjectId} from 'mongoose'
import carpic from '@/_media/images/auto-blue.svg'
import Image from 'next/image'

export default async function Message({
	params,
}: {
	params: { id: ObjectId }
}) {
	const reservation = await fetch(
		`${process.env.URL}/api/reservations/${params?.id}`
	)
		.then((res) => res.json())
		.catch((err) => console.error(err))

	return (
		<div className='flex justify-center '>
			<div className='w-[800px] bg-slate-800 p-8 m-4 space-y-28 rounded shadow-xl'>
				<header className=' flex justify-evenly'>
					<p>
						{reservation?.customer.firstName} {reservation?.customer.lastName}
					</p>
					<div>
						<p>{reservation?.customer.email}</p>
						<p>{reservation?.customer.phone}</p>
					</div>
				</header>
				<section className='flex justify-evenly [&>div]:w-full'>
					<div>
						<p>
							Space: {reservation?.parkingSpace.level} -{' '}
							{reservation?.parkingSpace.number.toLocaleString('en-US', {
								minimumIntegerDigits: 2,
								useGrouping: false,
							})}
						</p>
						<p>Status: {reservation?.parkingSpace.status}</p>
						<button
							type='submit'
							className={`${
								reservation?.parkingSpace.occupied
									? 'bg-green-500'
									: 'bg-red-500'
							} p-2  rounded`}
						>
							{reservation?.parkingSpace.occupied ? (
								<p>Leave Parking Space</p>
							) : (
								<p>Occupy Parking Space</p>
							)}
						</button>
					</div>
					<div className=' text-left px-8'>
						<Image src={carpic} className='' alt='carpic' width={50} height={50} />
						<p>license plate: {reservation.vehicle.licensePlate}</p>
						<div className='flex justify-between'>
							<p>{reservation.vehicle.make}</p>
							<p>{reservation.vehicle._model}</p>
						</div>
						<div className='flex justify-between'>
							<p>{reservation.vehicle.color}</p>
							<p>{reservation.vehicle.year}</p>
						</div>
					</div>
				</section>
				<footer className=' flex justify-evenly'>
					<p>{reservation.entryTime}</p>
					<TimeElapsedCounter targetDate='2023-01-01T00:00:00Z' />
				</footer>
				{/* customer */}
				{/* parking space */}
				{/* vehicle */}

				{/* entrytime */}
				{/* exittime */}
				{/* inprogress */}
				{/* rate */}
				{/* button to press occupied for sensor */}
			</div>
		</div>
	)
}
