import Customer from '@/_models/Customer';
import Reservation from '@/_models/Reservation';
import Vehicle from '@/_models/Vehicle';
import startDb from '@/_utils/startDb';
import { NextResponse } from 'next/server';

// get request
// export const GET = async (req: Request) => {
//     await startDb()
//     const customers = await Customer.find()
//     return NextResponse.json(customers)
// }

// post request
export const POST = async (req: Request) => {
    
    await startDb()

    const body = await req.json()

    // create reservation
    const reservation = await Reservation.create(body)

    // update vehicles array in reservation
    	// await reservation.findOneAndUpdate(
		// 	{ _id: reservation._id },
		// 	{ $push: { vehicles: vehicle._id } }
		// )

    // return reservation
    return NextResponse.json({reservation:reservation})
}