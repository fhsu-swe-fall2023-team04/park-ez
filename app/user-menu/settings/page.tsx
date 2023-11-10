import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function Settings() {
	const session = await getServerSession(authOptions)
	console.log(session)

	const user = await fetch(
		`${process.env.URL}/api/customers/${session?.user._id}`
	)
		.then((res) => res.json())
		.catch((err) => console.error(err))


	return (
		<div style={{ fontSize: 20 }} className='flex items-start justify-evenly'>
			<div>
				<br></br>
				<h1>User Info: </h1>
				<br></br>
				<div>First Name:  {user?.firstName}</div>
				<div>Last Name:  {user?.lastName}</div>
				<div>Email:  {user?.email}</div>
				<div>Phone:  {user?.phone}</div>
				<div>Payment Method:  {user?.paymentMethod}</div>
			</div>
			<div>
				{' '}
				<br></br>
				<h1>Vehicle(s): </h1>
				<br></br>
				{user?.vehicles?.map((v: any) => (
					<div key={v._id}>
						<div>Licence Plate:  {v.licensePlate}</div>
						<div>Make:  {v.make}</div>
						<div>Model:  {v._model}</div>
						<div>Color:  {v.color}</div>
						<div>Year:  {v.year}</div>
						<br></br>
						<br></br>
					</div>
				))}
			</div>
		</div>
	)
}
