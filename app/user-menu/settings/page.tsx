import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function Settings() {
	const session = await getServerSession(authOptions)
	console.log(session?.user)

	const user = await fetch(
		`${process.env.URL}/api/customers/${session?.user._id}`
	)
		.then((res) => res.json())
		.catch((err) => console.error(err))

	console.log(user)

	return (
		<div className='flex items-start justify-evenly'>
			<div>
				<h1>User Info</h1>
				<div>{user?.firstName}</div>
				<div>{user?.lastName}</div>
				<div>{user?.email}</div>
				<div>{user?.phone}</div>
			</div>
			<div>
				{' '}
				<h1>Vehicle(s)</h1>
				{user?.vehicles?.map((v: any) => (
					<div key={v._id}>
						<div>{v.licensePlate}</div>
						<div>{v.make}</div>
						<div>{v._model}</div>
						<div>{v.color}</div>
						<div>{v.year}</div>
					</div>
				))}
			</div>
		</div>
	)
}
