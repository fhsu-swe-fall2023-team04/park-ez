// Team 2 to modify as needed

import {Document, Model, model, models, Schema} from 'mongoose'
import {VehicleDocument} from './Vehicle'
import {CustomerDocument} from './Customer'

enum statusEnum {
	Available = 'Available',
	Occupied = 'Occupied',
	Reserved = 'Reserved',
}

export interface ParkingSpaceDocument extends Document {
    spaceNumber: string
    level: string
    status: statusEnum
    customer: CustomerDocument['_id']
    vehicle: VehicleDocument['_id']
    rate: {
        ratePerHour: number,
        ratePerDay: number,
    }
    entryTime: Date
    exitTime: Date

}

const parkingSpaceSchema = new Schema<ParkingSpaceDocument>({
    spaceNumber: {type: String, required: true},
    level: {type: String, required: true},
    status: {type: String, required: true},
    customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
    vehicle: {type: Schema.Types.ObjectId, ref: 'Vehicle'},
    rate: {
        ratePerHour: {type: Number, required: true},
        ratePerDay: {type: Number, required: true},
    },
    entryTime: {type: Date, default: Date.now},
    exitTime: {type: Date},

})

const ParkingSpace = models?.ParkingSpace || model('ParkingSpace', parkingSpaceSchema)
export default ParkingSpace as Model<ParkingSpaceDocument>