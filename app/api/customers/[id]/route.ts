'use server'

import Customer from '@/_models/Customer'
import Vehicle from '@/_models/Vehicle'
import {startDb} from '@/_utils/startDb'

import { ObjectId } from 'mongoose'
import { NextResponse } from 'next/server'

export const GET = async (
	req: Request,
	{ params }: { params: { id: ObjectId } }
) => {
	
	await startDb()
	const customer = await Customer.findById(params.id).populate('vehicle')

	return NextResponse.json(customer)
}
