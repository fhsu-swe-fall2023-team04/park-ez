'use server'

import Customer from '@/_models/Customer'

import startDb from '@/_utils/startDb'
import { ObjectId } from 'mongoose'
import { NextResponse } from 'next/server'

export const GET = async (
	req: Request,
	{ params }: { params: { id: ObjectId } }
) => {
	
	
    const customer = await Customer.findById(params.id).populate('transactions')
    const transactions = customer?.transactions
    

	return NextResponse.json(transactions)
}
