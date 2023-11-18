
import Reservation from '@/_models/Reservation'
import startDb from '@/_utils/startDb'

import { ObjectId } from 'mongoose'
import { NextResponse } from 'next/server'

export const GET = async (
	req: Request,
	{ params }: { params: { id: ObjectId } }
) => {
	
		await startDb()

    const reservations = await Reservation.find({customer: params.id})
      .populate(['parkingSpace', 'customer', 'vehicle']).exec()  

	return NextResponse.json(reservations)
}
