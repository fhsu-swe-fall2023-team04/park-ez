// Team 1 to modify as needed

import {Document, Model, model, models, Schema} from 'mongoose'
import {VehicleDocument} from './Vehicle'

export interface CustomerDocument extends Document {
    firstName: string
    lastName: string
    email: string
    phone: string
    vehicles: [VehicleDocument['_id']]
    paymentMethod: string
}

const customerSchema = new Schema<CustomerDocument>({
	firstName: { type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    vehicles: [{type: Schema.Types.ObjectId, ref: 'Vehicle',default: []}, ],
    paymentMethod: {type: String, required: true}
})

const Customer = models?.Customer || model('Customer', customerSchema)
export default Customer as Model<CustomerDocument>