import ParkingSpaceMap from '@/_components/ParkingSpaceMap'

const spaces: { distance: number; level: string; number: number }[] = []

// Levels array
const levels = ['A', 'B', 'C']

let i = 1

// Create 10 spaces for each level A, B, and C
levels.forEach((level) => {
	for (let number = 1; number <= 10; number++) {
		spaces.push({
			distance: number * i,
			level: level,
			number: number,
		})
		
	}
	i++
})

spaces.sort(
	(a: { distance: number }, b: { distance: number }) => a.distance - b.distance
)

export default function ParkingSpace() {
	return (
		<div className=' flex space-x-4 px-4 flex-wrap justify-center'>
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
			<div>
				{' '}
				<p className=' text-2xl py-2'>Available parking spaces</p>
				<ul className=' bg-slate-800 rounded-xl px-4 py-2 divide-y-2 divide-slate-400 overflow-scroll h-[65vh]'>
					{spaces.map((space) => (
						<li key={space.level+space.number} className='flex py-4 items-center justify-between  '>
							<div className='[&>*]:block'>
								<big>{space.distance} ft away</big>
								<small className=' text-slate-400'>
									Level {space.level} - Space {space.number}
								</small>
							</div>
							<button className=' bg-green-500 px-4 py-2 rounded'>Go</button>
						</li>
					))}
				</ul>
			</div>
			<ParkingSpaceMap />
			{/* <Payment /> */}
		</div>
	)
}
