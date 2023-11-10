// Team 1 to modify as needed

import mongoose, {Document, Model, model, models, ObjectId, Schema} from 'mongoose'


export interface CustomerDocument extends Document {
    firstName: string
    lastName: string
    email: string
    phone: string
    image: string
    vehicles: [ObjectId]
    paymentMethod: string
    reservations: [ObjectId]
    transactions: [ObjectId]
}

const customerSchema = new Schema<CustomerDocument>({
	firstName: { type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    image: {type: String, required: true, unique: true},
    vehicles: [{type: Schema.Types.ObjectId, ref: 'Vehicle', default: []},],
    reservations: [{type: Schema.Types.ObjectId, ref: 'Reservation', default: []}],
    transactions: [{type: Schema.Types.ObjectId, ref: 'Transaction', default: []}],
    paymentMethod: {type: String, required: true}
},  { timestamps: true }
)

const Customer = mongoose.models?.Customer || mongoose.model('Customer', customerSchema)
export default Customer as Model<CustomerDocument>