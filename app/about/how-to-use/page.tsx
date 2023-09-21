import Image from 'next/image'
import React from 'react'
import arrive from '../../../_media/images/arrive.jpeg'
import find from '../../../_media/images/find.jpeg'
import space from '../../../_media/images/space.jpeg'
import person from '../../../_media/images/person.jpeg'
import review from '../../../_media/images/review.jpeg'

export default function page() {
  return (
		<div className=' my-8 space-y-4'>
			<div className=' flex items-center justify-center space-x-4'>
				<Image src={arrive} width={400} alt='info pic' className='' />
				<div className='w-0.5 bg-slate-400 self-stretch '></div>
				<div>
					<p>
						A rider opens the app The rider enters the parking garage chooses
						the desired option; then confirms the pickup.
					</p>
				</div>
			</div>
			<div className=' flex items-center justify-center space-x-4'>
				<Image src={person} width={400} alt='info pic' className='' />
				<div className='w-0.5 bg-slate-400 self-stretch '></div>
				<div>
					<p>
						A rider opens the app The rider enters the parking garage chooses
						the desired option; then confirms the pickup.
					</p>
				</div>
			</div>
			<div className=' flex items-center justify-center space-x-4'>
				<Image src={find} width={400} alt='info pic' className='' />
				<div className='w-0.5 bg-slate-400 self-stretch '></div>
				<div>
					<p>
						A rider opens the app The rider enters the parking garage chooses
						the desired option; then confirms the pickup.
					</p>
				</div>
			</div>
			<div className=' flex items-center justify-center space-x-4'>
				<Image src={space} width={400} alt='info pic' className='' />
				<div className='w-0.5 bg-slate-400 self-stretch '></div>
				<div>
					<p>
						A rider opens the app The rider enters the parking garage chooses
						the desired option; then confirms the pickup.
					</p>
				</div>
			</div>
			<div className=' flex items-center justify-center space-x-4'>
				<Image src={review} width={400} alt='info pic' className='' />
				<div className='w-0.5 bg-slate-400 self-stretch '></div>
				<div>
					<p>
						A rider opens the app The rider enters the parking garage chooses
						the desired option; then confirms the pickup.
					</p>
				</div>
			</div>
		</div>
	)
}
