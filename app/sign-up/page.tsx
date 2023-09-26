import PaymentButton from '@/_components/PaymentButton'
import SocialLogins from '@/_components/SocialLogins'
import Image from 'next/image'
import React from 'react'
import car from '../../_media/images/car-icon.png'

export default function SignUp() {
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
						<form className='space-y-4 md:space-y-6' action='#'>
							<input
								type='text'
								name='name'
								id='name'
								className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='First Name'
								required
							/>

							<input
								type='text'
								name='name'
								id='name'
								className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='Last Name'
								required
							/>

							<div>
								<input
									type='email'
									name='email'
									id='imal'
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Email'
									required
								/>
							</div>

							<br className=' bg-slate-400 text-slate-400' />
							<p>or</p>
							<SocialLogins />
							<div className='flex space-x-2 justify-between'>
								<div>
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
								<PaymentButton />
							</div>
							<button
								type='submit'
								className='border border-slate-900 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
							>
								Create an account
							</button>
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
