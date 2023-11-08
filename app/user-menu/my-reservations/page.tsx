import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import axios from 'axios'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function Reservations() {
	const session = await getServerSession(authOptions)
	const user = session?.user
	const reservations = await fetch(
		`${process.env.URL}/api/customers/reservations/${user?._id}`
	)
		.then((res) => res.json())
    .catch((err) => console.error(err))
  console.log(reservations,"reservations")
	return (
		<div>
      Reservations
			{reservations?.map((item: any) => (
				<div>
          <p>{item._id}</p>
          <p>{item.customer}</p>
          <p>{item.vehicle}</p>
          <p>{item.rate.ratePerHour}</p>
          <p>{item.rate.ratePerDay}</p>
          <p>{item.entryTime}</p>
          <p>{item.exitTime}</p>{' '}
				</div>
			))}
		</div>
	)
}
