import ParkingMap from '@/_models/ParkingMap';
import {startDb} from '@/_utils/startDb';
import {NextResponse} from 'next/server';

// get request
export const GET = async (req: Request) => {
    startDb
    const spaces = await ParkingMap.find().sort({level:1, distance:1})
    return NextResponse.json(spaces)
}