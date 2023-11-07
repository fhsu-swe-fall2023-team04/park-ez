// Team 2 to modify as needed

import {Document, Model, model, models, Schema} from 'mongoose'


enum statusEnum {
	Available = 'Available',
	Occupied = 'Occupied',
	Reserved = 'Reserved',
}
enum levelEnum {
	A = 'A',
	B = 'B',
	C = 'C',
}


export interface ParkingMapDocument extends Document {
    distance: number;
    number: number
    level: levelEnum
    status: statusEnum
}

const parkingMapSchema = new Schema<ParkingMapDocument>({
    distance: {type: Number, required: true},
    number: {type: Number, required: true},
    level: {type: String, required: true},
    status: {type: String, required: true},

})

const ParkingMap = models?.ParkingMap || model('ParkingMap', parkingMapSchema)
export default ParkingMap as Model<ParkingMapDocument>