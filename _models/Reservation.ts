// Team 2 to modify as needed

import mongoose, {Document, Model, ObjectId, Schema} from 'mongoose'
import {ParkingMapDocument} from './ParkingMap'
import {CustomerDocument} from './Customer'
import {VehicleDocument} from './Vehicle'

export interface ReservationDocument extends Document {
    parkingSpace: ParkingMapDocument['_id']
    customer: CustomerDocument['_id']
    vehicle: VehicleDocument['_id']
    rate: {
        ratePerHour: number,
        ratePerDay: number,
    }
    entryTime: Date
    exitTime: Date
    inProgress: boolean
}

const reservationSchema = new Schema<ReservationDocument>({
    parkingSpace:{type: Schema.Types.ObjectId, ref: 'ParkingMap', required: true},
    customer: {type: Schema.Types.ObjectId, ref: 'Customer', required: true},
    vehicle: {type: Schema.Types.ObjectId, ref: 'Vehicle', required: true},
    rate: {
        ratePerHour: {type: Number, required: true},
        ratePerDay: {type: Number, required: true},
    },
    entryTime: {type: Date, default: Date.now},
    exitTime: {type: Date, default: Date.now},
    inProgress: {type: Boolean, default: true}

},  { timestamps: true }
)

const Reservation = mongoose.models?.Reservation || mongoose.model('Reservation', reservationSchema)
export default Reservation as Model<ReservationDocument>