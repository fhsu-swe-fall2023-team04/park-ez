'use server'
import ParkingMap from '@/_models/ParkingMap'
import Reservation from '@/_models/Reservation'
import {startDb} from '@/_utils/startDb'
import {ObjectId} from 'mongoose'
import {revalidateTag} from 'next/cache'

export const occupySpace = async (id: ObjectId) => {

try {
        await startDb()
    const reservation = await Reservation.findOneAndUpdate(
        {_id: id},
        {
            entryTime: Date.now(),
        }

    ).populate('parkingSpace')
    if (reservation && reservation.parkingSpace) {
        // Update the ParkingMap
        await ParkingMap.findOneAndUpdate(
            {_id: reservation.parkingSpace},
            {occupied: true}
        );
    }
} catch (error) {
    console.error(error)
}

    revalidateTag('reservation')

}