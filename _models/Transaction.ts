// Team 3 to modify as needed

import {Document, Model, model, models, Schema} from 'mongoose'
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
    customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
    reservation: {type: Schema.Types.ObjectId, ref: 'Reservation'},
    status: {type: String, required: true},

},  { timestamps: true }
)

const Transaction = models?.Transaction || model('Transaction', transactionSchema)
export default Transaction as Model<TransactionDocument>