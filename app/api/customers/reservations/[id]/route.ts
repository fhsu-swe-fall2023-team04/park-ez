'use server'

import Customer from '@/_models/Customer'
import Reservation from '@/_models/Reservation'

import startDb from '@/_utils/startDb'
import { ObjectId } from 'mongoose'
import { NextResponse } from 'next/server'

export const GET = async (
	req: Request,
	{ params }: { params: { id: ObjectId } }
) => {
	
	await startDb()
	const customer = await Customer.findById(params.id).populate({
		path: 'reservations',
		model:'Reservation',
   populate: [
      { path: 'parkingSpace' },  // Assuming the ref is correctly set in your Reservation schema
      { path: 'customer' },      // Assuming the ref is correctly set in your Reservation schema
      { path: 'vehicle' }        // Assuming the ref is correctly set in your Reservation schema
    ]
  })
	const reservations = customer?.reservations

    

	return NextResponse.json(reservations)
}
