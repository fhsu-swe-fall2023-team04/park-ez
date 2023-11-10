import { authOptions } from '@/app/api/auth/[...nextauth]/options'
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
			{reservations?.map((item: any) => (
				<div key={item._id}>
					<p>firstName: {item.customer.firstName}</p>
					<p>model: {item.vehicle._model}</p>
					<p>per Hour: {item.rate.ratePerHour}</p>
					<p>per Day: {item.rate.ratePerDay}</p>
					<p>entryTIme: {item.entryTime}</p>
					<p>exitTime: {item.exitTime}</p>{' '}
					<br></br>
					<br></br>
				</div>
			))}
		</div>
	)
}
