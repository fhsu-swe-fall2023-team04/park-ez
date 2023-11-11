'use server'

import ParkingMap from '@/_models/ParkingMap'
import Reservation from '@/_models/Reservation'
import startDb from '@/_utils/startDb'
import {ObjectId} from 'mongoose'
import {revalidateTag} from 'next/cache'

export const exitSpace = async (id: ObjectId) => {
    try {
            await startDb()
    const reservation = await Reservation.findOneAndUpdate(
        {_id: id},
        {
            inProgress:false,
            exitTime: Date.now()
            
        }
    )
    await ParkingMap.findOneAndUpdate({
        _id:reservation?.parkingSpace
    },
        {
            occupied: false,
            status:'Available'
        }
    )
    } catch (error) {
        console.error(error)
    }

    revalidateTag('reservation')

}