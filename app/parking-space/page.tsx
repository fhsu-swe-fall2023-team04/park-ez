import DateTimePicker from '@/_components/DateTimePicker'
import ParkingAvail from '@/_components/ParkingAvail'
import ParkingSpaceMap from '@/_components/ParkingSpaceMap'
import Payment from '@/_components/Payment'
import React from 'react'

export default function ParkingSpace() {
	return (
		<div className=' flex space-x-4 px-4 flex-wrap justify-center'>
			<DateTimePicker />
			<ParkingAvail />
			<ParkingSpaceMap />
			{/* <Payment /> */}
		</div>
	)
}
