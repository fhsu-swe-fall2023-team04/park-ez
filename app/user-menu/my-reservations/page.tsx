import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import dayjs from 'dayjs'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function Reservations() {
	const session = await getServerSession(authOptions)
	const user = session?.user
	const reservations = await fetch(
		`${process.env.URL}/api/reservations/customer/${user?._id}`
	)
		.then((res) => res.json())
		.catch((err) => console.error(err))

	return (
		<div className=' space-y-4' style={{ fontSize: 20 }}>
			<br></br>
			<p>Reservations:</p>
			<br></br>
			{reservations?.map((item: any) => {
				const entry = dayjs(item.entryTime)
				const exit = dayjs(item.exitTime)
				const seconds = exit.diff(entry, 'second')
				const minutes = exit.diff(entry, 'minute')
				const hours = exit.diff(entry, 'hour')
				const days = exit.diff(entry, 'day')
				return (
					// need to add more data from fetch
					<div className='text-left bg-slate-700 p-2 rounded' key={item._id}>
						<div className='flex justify-evenly'>
							<div>
								<p>firstName: {item.customer.firstName}</p>
								<p>lastName: {item.customer.lastName}</p>
							</div>

							<div>
								{' '}
								<p>make: {item.vehicle.make}</p>
								<p>model: {item.vehicle.carModel}</p>
								<p>year: {item.vehicle.year}</p>
								<p>color: {item.vehicle.color}</p>
							</div>
						</div>
						<p>
							time: {days} days, {hours} hours, {minutes} minutes, {seconds}{' '}
							seconds{' '}
						</p>
						<p>inProgress: {item.inProgress.toString()}</p>
						<br></br>
					</div>
				)
			})}
		</div>
	)
}
