'use server'

import Reservation from '@/_models/Reservation'
import startDb from '@/_utils/startDb'
import { ObjectId } from 'mongoose'
import { NextResponse } from 'next/server'

export const GET = async (
	req: Request,
	{ params }: { params: { id: ObjectId } }
) => {
	
	await startDb()
    const reservation = await Reservation.findById(params.id)
        .populate('parkingSpace')  // Assumes `parkingSpace` is a ref to a ParkingMapDocument
        .populate('customer')      // Assumes `customer` is a ref to a CustomerDocument
        .populate('vehicle')  

	return NextResponse.json(reservation)
}
