import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import axios from 'axios'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function Transactions() {
	const session = await getServerSession(authOptions)
	const user = session?.user
	const transactions = await fetch(
		`${process.env.URL}/api/customers/transactions/${user?._id}`
    ).then(res => res.json()).catch(err => console.error(err))

	return <div>Transactions</div>
}
