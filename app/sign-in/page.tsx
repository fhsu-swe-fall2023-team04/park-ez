import Customer from '@/_models/Customer'
import { getLicensePlate } from '@/_serverActions/getLicensePlate'
import startDb from '@/_utils/startDb'
import React, { useState } from 'react'

export default async function SignIn() {
	await startDb()
	const customers = await Customer.find()
	
	console.log(customers)
	
	
	const submitForm = async (fd: FormData) => {
		'use server'
		// const phone = fd.get('phone')?.toString()
		// const files: File = fd.get('files') as File
		// const licensePlate = await getLicensePlate(files)
		// console.log("License Plate: ", licensePlate)
	}

	const aWord = 'hello'

	return (
		<div className='bg-gray-50 dark:bg-gray-900 h-screen  '>
			<div className='flex flex-col h-screen items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
				
				{/* title */}
				<a
					href='#'
					className='flex items-center mb-6 text-3xl font-semibold text-gray-400 '
				>
					Welcome to ParkEZ
					 {aWord}
				</a>
				<div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
					<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
						{/* sign in to accout */}
						<h1 className='text-xl font-bold text-center text-gray-900 md:text-2xl dark:text-white'>
							Sign in to your account
						</h1>
						{/*  */}
						<form className='space-y-4 md:space-y-6 w-full' action={submitForm}>
							<div className=' flex items-center justify-between '>
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
							{/* phone */}
								
								<input
									type='tel'
									name='phone'
									placeholder='Phone Number'
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									required
								/>
							</div>

							<button
								type='submit'
								className='w-full text-white bg-primary-600 hover:bg-primary-700 border border-slate-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
							>
								Sign in
							</button>
							<p className='text-sm font-light text-gray-500 dark:text-gray-400'>
								Don’t have an account yet?{' '}
								<a
									href='#'
									className='font-medium text-primary-600 hover:underline dark:text-primary-500'
								>
									Sign up
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
