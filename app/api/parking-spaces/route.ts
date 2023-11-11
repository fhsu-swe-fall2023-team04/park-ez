import Customer from '@/_models/Customer';
import ParkingMap from '@/_models/ParkingMap';
import Vehicle from '@/_models/Vehicle';
import startDb from '@/_utils/startDb';
import { NextResponse } from 'next/server';

// get request
export const GET = async (req: Request) => {
    
    const spaces = await ParkingMap.find().sort({level:1, distance:1})
    return NextResponse.json(spaces)
}