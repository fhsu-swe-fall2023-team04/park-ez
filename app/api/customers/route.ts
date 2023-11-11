import Customer from '@/_models/Customer';
import Vehicle from '@/_models/Vehicle';
import startDb from '@/_utils/startDb';
import { NextResponse } from 'next/server';

// get request
export const GET = async (req: Request) => {
    
    const customers = await Customer.find()
    return NextResponse.json(customers)
}

// post request
export const POST = async (req: Request) => {
    
    

    const body = await req.json()
    const customerObj = body.customer
    const vehicleObj = body.vehicle

    // create customer
    const customer = await Customer.create(customerObj)

    // create vehicle
    const vehicle = await Vehicle.create(vehicleObj)

    // update vehicles array in customer
    	await Customer.findOneAndUpdate(
			{ _id: customer._id },
			{vehicle: vehicle._id  }
		)

    // return customer
    return NextResponse.json({customer:customer})
}