'use server'

import ParkingMap from '@/_models/ParkingMap'
import {startDb} from '@/_utils/startDb'
import { ObjectId } from 'mongoose'
import { NextResponse } from 'next/server'

export const GET = async (
	req: Request,
	{ params }: { params: { id: ObjectId } }
) => {
	
	await startDb()
	const space = await ParkingMap.findById(params.id)

	return NextResponse.json(space)
}
