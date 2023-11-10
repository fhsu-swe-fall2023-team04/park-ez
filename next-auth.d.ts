import {DefaultSession, DefaultUser} from 'next-auth'
import {VehicleDocument} from './_models/Vehicle'
import {ReservationDocument} from './_models/Reservation'
declare module 'next-auth' {
    interface Session{
        user: {
            _id: ObjectId | Request,
            email: String,
            name: String
            image: String,
            phone: String,
            vehicles: [ObjectId],
            reservations: [ObjectId],
            transactions: [ObjectId],
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
