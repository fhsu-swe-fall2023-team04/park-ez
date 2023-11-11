import TimeElapsedCounter from '@/_components/TimeElapsedCounter'
import carpic from '@/_media/images/auto-blue.svg'
import {exitSpace} from '@/_serverActions/exitSpace'
import {occupySpace} from '@/_serverActions/occupySpace'
import {authOptions} from '@/app/api/auth/[...nextauth]/options'
import {ObjectId} from 'mongoose'
import {getServerSession} from 'next-auth'
import {getSession} from 'next-auth/react'
import {revalidateTag} from 'next/cache'
import Image from 'next/image'
import {redirect} from 'next/navigation'

export default async function Message({
	params,
}: {
	params: { id: ObjectId }
	}) {
	
	const session = await getServerSession(authOptions)
	if (!session) {
		redirect('/')
	}

	
	const reservation = await fetch(
		`${process.env.URL}/api/reservations/${params?.id}`,
		{
			cache: 'no-cache',
			next: { tags: ['reservation'] },
		}
	)
		.then((res) => res.json())
		.catch((err) => console.error(err))

	if (reservation?.parkingSpace.status === 'Available') {
		redirect('/reservation')
	}

	const handleOccupy = async () => {
		'use server'
		occupySpace(params?.id)
		revalidateTag('reservation')
	}
	const handleExit = async () => {
		'use server'
		exitSpace(params?.id)
		revalidateTag('reservation')
	}

	return (
		<div className='flex justify-center '>
			<div className='w-[800px] bg-slate-800 p-8 m-4 space-y-28 rounded shadow-xl'>
				<header className=' flex justify-evenly'>
					<p>
						{reservation?.customer.firstName} {reservation?.customer.lastName}
					</p>
					<div>
						<p>{reservation?.customer.email}</p>
						<p>{reservation?.customer.phone}</p>
					</div>
				</header>
				<section className='flex justify-evenly [&>div]:w-full'>
					<div>
						<p>
							Space: {reservation?.parkingSpace.level} -{' '}
							{reservation?.parkingSpace.number.toLocaleString('en-US', {
								minimumIntegerDigits: 2,
								useGrouping: false,
							})}
						</p>
						<p>Status: {reservation?.parkingSpace.status}</p>

						{/* button */}

						{reservation?.parkingSpace.occupied===true ? (
							<form action={handleExit}>
								<button type='submit' className='bg-red-500 p-2  rounded'>
									<p>Leave Parking Space</p>
								</button>
							</form>
						) : (
							<form action={handleOccupy}>
								<button type='submit' className='bg-green-500 p-2  rounded'>
									<p>Occupy Parking Space</p>
								</button>
							</form>
						)}
					</div>
					<div className=' text-left px-8'>
						<Image
							src={carpic}
							className=''
							alt='carpic'
							width={50}
							height={50}
						/>
						<p>license plate: {reservation?.vehicle.licensePlate}</p>
						<div className='flex justify-between'>
							<p>{reservation?.vehicle.make}</p>
							<p>{reservation?.vehicle.carModel}</p>
						</div>
						<div className='flex justify-between'>
							<p>{reservation?.vehicle.color}</p>
							<p>{reservation?.vehicle.year}</p>
						</div>
					</div>
				</section>
				<footer className=' flex justify-evenly'>
					<p>{reservation?.entryTime}</p>
					<TimeElapsedCounter targetDate='2023-01-01T00:00:00Z' />
				</footer>
				{/* customer */}
				{/* parking space */}
				{/* vehicle */}

				{/* entrytime */}
				{/* exittime */}
				{/* inprogress */}
				{/* rate */}
				{/* button to press occupied for sensor */}
			</div>
		</div>
	)
}
