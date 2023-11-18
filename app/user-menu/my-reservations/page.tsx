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
		<div style={{ fontSize: 20 }}>
			<br></br>
			<p>Reservations:</p>
			<br></br>
			{reservations?.map((item: any) => {
				const entry = dayjs(item.entryTime)
				const exit = dayjs(item.exitTime)
				const time = exit.diff(entry,'minute')
				return (
					// need to add more data from fetch
					<div key={item._id}>
						<p>firstName: {item.customer.firstName}</p>
						<p>lastName: {item.customer.lastName}</p>
						<p>make: {item.vehicle.make}</p>
						<p>model: {item.vehicle.carModel}</p>
						<p>year: {item.vehicle.year}</p>
						<p>color: {item.vehicle.color}</p>
						{/* <p>per Hour: {item.rate.ratePerHour}</p>
						<p>per Day: {item.rate.ratePerDay}</p>
						<p>entryTIme: {item.entryTime}</p>
						<p>exitTime: {item.exitTime}</p> <br></br> */}
						<p>minutes: {time} </p>
						<br></br>
					</div>
				)
			})}
		</div>
	)
}
