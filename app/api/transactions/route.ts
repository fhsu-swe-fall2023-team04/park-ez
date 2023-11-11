import Transaction from '@/_models/Transaction';
import startDb from '@/_utils/startDb';
import { NextResponse } from 'next/server';

// get request
export const GET = async (req: Request) => {
    
    const transactions = await Transaction.find()
    return NextResponse.json(transactions)
}

// post request
export const POST = async (req: Request) => {
    
    

    const body = await req.json()
    
    const transactionObg = body.transaction

    // create transaction
    const transaction = await Transaction.create(transactionObg)

    // update vehicles array in customer
    	await Transaction.findOneAndUpdate(
			{ _id: transaction._id }
		)

    // return customer
    //return NextResponse.json({customer:customer})
}