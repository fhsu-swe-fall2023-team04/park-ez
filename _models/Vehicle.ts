// Team 2 to modify as needed



import {Document, Model, model, models, ObjectId, Schema} from 'mongoose'


export interface VehicleDocument  {
    _id: ObjectId
    licensePlate: string
    vehicleType: string
    make:string
    model: string
    color: string
    year: string

}

const vehicleSchema = new Schema<VehicleDocument>({
	licensePlate: { type: String, required: true, unique:true},
    make: {type: String, required: true},
    model: {type: String, required: true},
    color: {type: String, required: true},
    year: {type: String, required: true}
})

const Vehicle = models?.Vehicle || model('Vehicle', vehicleSchema)
export default Vehicle as Model<VehicleDocument>
