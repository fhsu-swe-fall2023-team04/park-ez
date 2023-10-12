
import {Document, Model, model, models, Schema} from 'mongoose'
import {VehicleDocument} from './Vehicle'


export interface CustomerDocument extends Document {
    firstName: string
    lastName: string
    email: string
    phone: string
    vehicles: [VehicleDocument['_id']]

}

const customerSchema = new Schema<CustomerDocument>({
	firstName: { type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    vehicles: [{type: Schema.Types.ObjectId, ref: 'Vehicle'}]

})

const Customer = models?.Customer || model('Customer', customerSchema)
export default Customer as Model<CustomerDocument>
