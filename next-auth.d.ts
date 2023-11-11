import {DefaultSession, DefaultUser} from 'next-auth'
import {VehicleDocument} from './_models/Vehicle'
import {ReservationDocument} from './_models/Reservation'
import {TransactionDocument} from './_models/Transaction'
declare module 'next-auth' {
    interface Session{
        user: {
            _id: ObjectId | Request,
            email: String,
            name: String
            image: String,
            phone: String,
            vehicle: VehicleDocument['_id'],
            reservations: [ReservationDocument['_id']],
            transactions: [TransactionDocument['_id']],
            paymentMethod: string

        } & DefaultSession
    }

        interface User extends DefaultUser {
            _id: ObjectId | Request,
            email: String,
            firstName: String,
            lastName: String,
            image: String,
            phone: String,
            vehicles: [ObjectId],
            reservations: [ObjectId],
            transactions: [ObjectId],
            paymentMethod: string
		}
}
