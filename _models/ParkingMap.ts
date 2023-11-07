// Team 2 to modify as needed

import {Document, Model, model, models, Schema} from 'mongoose'


enum statusEnum {
	Available = 'Available',
	Occupied = 'Occupied',
	Reserved = 'Reserved',
}

export interface ParkingMapDocument extends Document {
    MapNumber: string
    level: string
    status: statusEnum
}

const parkingMapSchema = new Schema<ParkingMapDocument>({
    MapNumber: {type: String, required: true},
    level: {type: String, required: true},
    status: {type: String, required: true},

})

const ParkingMap = models?.ParkingMap || model('ParkingMap', parkingMapSchema)
export default ParkingMap as Model<ParkingMapDocument>