import Image from 'next/image'
import { redirect } from 'next/navigation'
import { Stripe } from 'stripe'
import car from '../../_media/images/car-icon.png'
import { getLicensePlate } from '@/_serverActions/getLicensePlate'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/options'

export default async function SignUp() {
	'use server'

	const session = await getServerSession(authOptions)
	const user = session?.user

	if (user?.phone !== undefined) {
		redirect('/')
	}

	const handleSubmit = async (fd: FormData) => {
		'use server'
		const session = await getServerSession(authOptions)
		const user = session?.user

		const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
			apiVersion: '2023-10-16',
		})

		// customer
		const firstName = fd.get('firstName')?.toString()
		const lastName = fd.get('lastName')?.toString()
		const email = fd.get('email')?.toString()
		const phone = fd.get('phone')?.toString()
		const paymentMethod = fd.get('payment')?.toString()
		const image = user?.image as string
		// vehicles
		const files: File = fd.get('files') as File
		const licensePlate =
			(await getLicensePlate(files)) || fd.get('licensePlate')?.toString()
		const make = fd.get('make')?.toString()
		const model = fd.get('model')?.toString()
		const color = fd.get('color')?.toString()
		const year = fd.get('year')?.toString()

		const vehicle = {
			licensePlate,
			make,
			model,
			color,
			year,
		}

		const customer = {
			firstName,
			lastName,
			email,
			image,
			phone,
			paymentMethod,
		}

		const customerData: Stripe.CustomerCreateParams = {
			name: customer.firstName + ' ' + customer.lastName,
			email: customer.email,
			phone: customer.phone,
		}

		try {
			await fetch(`${process.env.URL}/api/customers`, {
				method: 'POST',
				body: JSON.stringify({
					customer: customer,
					vehicle: vehicle,
				}),
			})

			//Create a Stripe Customer
			await stripe.customers.create(customerData)

			redirect('/sign-in')
		} catch (error) {
			throw error
		}
	}
	return (
		<section className='bg-gray-50 dark:bg-gray-900'>
			<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
				<a
					href='#'
					className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
				>
					Park EZ
					<Image className='mr-2' src={car} height={80} width={80} alt='logo' />
				</a>
				<div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
					<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
						<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
							Create an account
						</h1>

						{/* form */}
						<form className='space-y-4 md:space-y-6' action={handleSubmit}>
							{/* first name */}
							<input
								type='text'
								name='firstName'
								value={user?.name?.split(' ')[0]}
								className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='First Name'
								required
							/>

							{/* last name */}
							<input
								type='text'
								name='lastName'
								value={user?.name?.split(' ')[1]}
								className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='Last Name'
								required
							/>

							{/* email */}
							<div>
								<input
									type='email'
									name='email'
									value={user?.email as string}
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Email'
									required
								/>
							</div>
							{/* phone */}
							<div>
								<input
									type='phone'
									name='phone'
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Phone'
									required
								/>
							</div>

							<br className=' bg-slate-400 text-slate-400' />
							{/* <p>or</p> */}
							{/* social logins */}
							{/* <SocialLogins /> */}

							<div className=' flex items-center justify-between '>
								{/* licenseplate */}
								<div className=' flex-1 mr-2'>
									<input
										type='text'
										name='licensePlate'
										placeholder='License Plate'
										className=' w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									/>
								</div>
								{/* upload */}
								<div>
									<input
										type='file'
										name='files'
										className='hidden'
										id='upload'
									/>
									<label htmlFor='upload' className=' cursor-pointer'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-8 h-8'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z'
											/>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z'
											/>
										</svg>
									</label>
								</div>
							</div>

							<div className='flex space-x-2 justify-between'>
								<div>
									{/* make */}
									<input
										type='text'
										name='make'
										id='make'
										className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='Make'
										required
									/>
								</div>
								<div>
									{/* model */}
									<input
										type='text'
										name='model'
										id='model'
										className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='Model'
										required
									/>
								</div>
							</div>
							<div className=' flex space-x-2 justify-between'>
								{/* year */}
								<div>
									<input
										type='text'
										name='year'
										id='year'
										className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='Year'
										required
									/>
								</div>
								{/* color */}
								<div>
									<input
										type='text'
										name='color'
										id='color'
										className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='Color'
										required
									/>
								</div>
							</div>
							<div>
								<label htmlFor='payments'>Payment information</label>
								{/* <PaymentButton /> */}
								<input
									type='text'
									name='payment'
									id='payment'
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Payment Type'
									required
								/>
							</div>

							{/* submit */}
							<button
								type='submit'
								className='border border-slate-900 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
							>
								Create an account
							</button>

							{/* already have account */}
							<p className='text-sm font-light text-gray-500 dark:text-gray-400'>
								Already have an account?{' '}
								<a
									href='#'
									className='font-medium text-primary-600 hover:underline dark:text-primary-500'
								>
									Login here
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
