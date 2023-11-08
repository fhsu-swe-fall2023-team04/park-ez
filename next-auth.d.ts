import {VehicleDocument} from './_models/Vehicle'
declare module 'next-auth' {
    interface Session{
        user: {
            _id: ObjectId| Request,
            phone: String,
            vehicles: [VehicleDocument['_id']]
            paymentMethod: string

        } & DefaultSession
    }

        // interface User extends DefaultUser {
		// 	_id: string
        //     phone: String,
        //     vehicles: [VehicleDocument['_id']]
        //     paymentMethod: string
		// }
}
