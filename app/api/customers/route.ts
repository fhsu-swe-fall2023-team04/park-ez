import Customer from '@/_models/Customer';
import startDb from '@/_utils/startDb';
import {NextResponse} from 'next/server';

export const GET = async (req:Request) => {
    await startDb()
    const customers = await Customer.find()
    return NextResponse.json(customers)
}

export const POST = async (req: Request) => {
    const body = await req.json()
    const customer = await Customer.create(...body)
    return NextResponse.json(customer)
}