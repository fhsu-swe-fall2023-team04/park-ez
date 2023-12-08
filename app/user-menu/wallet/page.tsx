import React from 'react'
import { Stripe } from 'stripe'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: '2023-10-16',
})

const session = await getServerSession(authOptions)

export default async function Wallet() {
	 'use server'

	 const paymentMethods = await stripe.customers.listPaymentMethods(
	 	session?.user.paymentMethod ?? '',
	 	{ type: 'card'}
	 )
	
	 if (paymentMethods.data[paymentMethods.data.length - 1]) {
	 await stripe.customers.update(
		session?.user.paymentMethod ?? '',
		{
			invoice_settings: {
			default_payment_method: paymentMethods.data[paymentMethods.data.length - 1].id
		  },
		}
	  );
	}

	 const setUpPaymentMethod = async (fd: FormData) => {
	 	'use server'
		
	 	try {
	 		//Save card info
	 		const stripeSession = await stripe.checkout.sessions.create({
	 			payment_method_types: ['card'],
	 			mode: 'setup',
	 			customer: session?.user.paymentMethod,
	 			success_url: `${process.env.URL}/user-menu/wallet`,
	 			cancel_url: `${process.env.URL}/user-menu/`,
	 		})
			stripeSession.setup_intent
	 		redirect(stripeSession.url!)
	 	} catch (error) {
	 		throw error
	 	}
	}

	return (
		<div className='px-4 pt-8 leading-8 [&>h1]:text-2xl [&>h1]:py-4 [&>h1]:font-bold '>
			 <h1>My wallet</h1>

			<form action={setUpPaymentMethod} >
				<p>Selected Card: *{paymentMethods.data[paymentMethods.data.length - 1]?.card?.last4 ?? "N/A"}</p>
				<button type='submit'>Set-Up Payment Method</button>
			</form>
		</div>
	)
}