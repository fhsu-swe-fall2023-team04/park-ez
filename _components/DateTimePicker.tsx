import React from 'react'

export default function DateTimePicker() {
	return (
		<div className=' '>
			<p className='py-2 text-2xl'>Date and Time</p>
			<div className=' space-y-2'>
				<input
					type='date'
					className='block w-full rounded-lg p-2 text-xl bg-slate-800 text-white 	'
				/>
				<input
					type='time'
					className='block w-full rounded-lg p-2 text-xl bg-slate-800 text-white '
				/>
			</div>
		</div>
	)
}
