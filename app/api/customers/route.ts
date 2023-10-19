import Customer from '@/_models/Customer';
import startDb from '@/_utils/startDb';
import {NextResponse} from 'next/server';

export const GET = async (req:Request) => {
    await startDb()
    const customers = await Customer.find()
    return NextResponse.json(customers)
}

