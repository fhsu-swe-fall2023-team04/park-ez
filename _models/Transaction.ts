import {Document, Model, model, models, Schema} from 'mongoose'
import {CustomerDocument} from './Customer'

enum statusEnum {
	Unpaid = 'Unpaid',
	Pending = 'Pending',
	Paid = 'Paid',
}

export interface TransactionDocument extends Document {
    totalCost: number,
    customer: CustomerDocument['_id'],
    space: TransactionDocument['_id'],
    status: statusEnum,


}

const transactionSchema = new Schema<TransactionDocument>({
    totalCost: {type: Number, required: true},
    customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
    space: {type: Schema.Types.ObjectId, ref: 'ParkingSpace'},
    status: {type: String, required: true},

})

const Transaction = models?.Transaction || model('Transaction', transactionSchema)
export default Transaction as Model<TransactionDocument>