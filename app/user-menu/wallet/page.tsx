import React from 'react'
import { Stripe } from 'stripe'
import { redirect } from 'next/navigation'

export default async function Wallet() {
	
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
		apiVersion: '2023-10-16',
	})

	const paymentMethods = await stripe.customers.listPaymentMethods(
		'cus_OvsQ7xyhnCsO8t',
		{ type: 'card', limit: 1 }
	)

	const handleTopUp = async (fd: FormData) => {
		'use server'

		const param: Stripe.ChargeCreateParams = {
			amount: 100,
			currency: 'usd',
			description: 'Test Payment',
			customer: 'cus_OvtlbdO1SxVoR4',
			receipt_email: 'm_mikaelian@mail.fhsu.edu',
		}

		try {
			await stripe.charges.create(param)

			/* Add transaction to MongoDB
			var transaction_id = (await stripe.charges.create(param)).id;

			const transaction = {
				totalCost: 20,
				customer: CustomerDocument['_id'],
				space: TransactionDocument['_id'],
				status: statusEnum
			}

			await fetch(`${process.env.URL}/api/transactions`, {
				method: 'POST',
				body: JSON.stringify({
					transaction: transaction
				}),
			})
			*/
		} catch (error) {
			throw error
		}
	}

	const setUpPaymentMethod = async (fd: FormData) => {
		'use server'
		try {
			//Save credit card info
			const session = await stripe.checkout.sessions.create({
				payment_method_types: ['card'],
				mode: 'setup',
				customer: 'cus_OvsQ7xyhnCsO8t',
				success_url: `http://localhost:3000/user-menu`,
				cancel_url: `http://localhost:3000/user-menu`,
			})
			redirect(session.url!)
		} catch (error) {
			throw error
		}
	}

	return (
		<div className='px-4 pt-8 leading-8 [&>h1]:text-2xl [&>h1]:py-4 [&>h1]:font-bold '>
			<h1>My wallet</h1>

			<form action={setUpPaymentMethod}>
				<p>Selected Card: *{paymentMethods.data[0].card?.exp_year}</p>
				<button type='submit'>Set-Up Payment Method</button>
			</form>

			<form action={handleTopUp}>
				<button>Test Charge</button>
			</form>
		</div>
	)
}
