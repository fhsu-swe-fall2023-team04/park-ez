import React from 'react'

export default function ParkingAvail() {
  return (
		<div>
			{' '}
			<p className=' text-2xl py-2'>Available parking spaces</p>
			<ul className=' bg-slate-800 rounded-xl px-4 py-2'>
				<li className='flex py-4 items-center justify-between border-b border-slate-600 '>
					<div className='[&>*]:block'>
						<big>5 feet away</big>
						<small className=' text-slate-400'>Level A - Space 12</small>
					</div>
					<button className=' bg-green-500 px-4 py-2 rounded'>Go</button>
				</li>
				<li className='flex py-4 items-center justify-between border-b border-slate-600'>
					<div className='[&>*]:block'>
						<big>20 feet away</big>
						<small className=' text-slate-400'>Level A - Space 22</small>
					</div>
					<button className=' bg-green-500 px-4 py-2 rounded'>Go</button>
				</li>
				<li className='flex py-4 items-center justify-between border-b border-slate-600'>
					<div className='[&>*]:block'>
						<big>30 feet away</big>
						<small className=' text-slate-400'>Level B - Space 11</small>
					</div>
					<button className=' bg-green-500 px-4 py-2 rounded'>Go</button>
				</li>
				<li className='flex py-4 items-center justify-between '>
					<div className='[&>*]:block'>
						<big>40 feet away</big>
						<small className=' text-slate-400'>Level C - Space 13</small>
					</div>
					<button className=' bg-green-500 px-4 py-2 rounded'>Go</button>
				</li>
			</ul>
		</div>
	)
}
