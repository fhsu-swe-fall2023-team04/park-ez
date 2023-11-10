// Team 2 to modify as needed



import mongoose, {Document, Model, model, models, ObjectId, Schema} from 'mongoose'


export interface VehicleDocument extends Document {
    licensePlate: string
    make:string
    _model: string
    color: string
    year: string

}

const vehicleSchema = new Schema<VehicleDocument>({
	licensePlate: { type: String, required: true, unique:true},
    make: {type: String, required: true},
    _model: {type: String, required: true},
    color: {type: String, required: true},
    year: {type: String, required: true}
}
)

const Vehicle = mongoose.models?.Vehicle || mongoose.model('Vehicle', vehicleSchema)
export default Vehicle as Model<VehicleDocument>
