import Customer from '@/_models/Customer';
import ParkingMap from '@/_models/ParkingMap';
import Reservation from '@/_models/Reservation';
import {startDb} from '@/_utils/startDb';
import {NextResponse} from 'next/server';

// get request
// export const GET = async (req: Request) => {
//     
//     const customers = await Customer.find()
//     return NextResponse.json(customers)
// }

// post request
export const POST = async (req: Request) => {
    	await startDb()

    

    const body = await req.json()

    // create reservation
    const reservation = await Reservation.create(body)

    // update user array in reservations
    	await Customer.findOneAndUpdate(
			{ _id: body.customer },
			{ $push: { reservations: reservation._id } }
		)
    // update parking space map
    	await ParkingMap.findOneAndUpdate(
			{ _id: body.parkingSpace },
			{ status: 'Reserved'}
		)

    // return reservation
    return NextResponse.json(reservation)
}