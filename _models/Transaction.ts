// Team 3 to modify as needed

import mongoose, {Document, Model, ObjectId, Schema} from 'mongoose'
import {CustomerDocument} from './Customer'
import {ReservationDocument} from './Reservation'

enum statusEnum {
	Unpaid = 'Unpaid',
	Pending = 'Pending',
	Paid = 'Paid',
}

export interface TransactionDocument extends Document {
    totalCost: number,
    customer: CustomerDocument['_id'],
    reservation: ReservationDocument['_id'],
    status: statusEnum,
}

const transactionSchema = new Schema<TransactionDocument>({
    totalCost: {type: Number, required: true},
    customer: {type: Schema.Types.ObjectId, ref: 'Customer', required:true},
    reservation: {type: Schema.Types.ObjectId, ref: 'Reservation', required:true},
    status: {type: String, required: true},

},  { timestamps: true }
)

const Transaction =  mongoose.model('Transaction', transactionSchema)
export default Transaction as Model<TransactionDocument>