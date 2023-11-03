import React from 'react';
import {Stripe} from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: "2023-10-16",
});

export default function Wallet() {
	const handleTopUp = async () => {
		'use server'

			const param: Stripe.ChargeCreateParams = {
				amount: 2000,
				currency: 'usd',
				description:'Balance top-up',
				customer:'cus_OvtlbdO1SxVoR4',
				receipt_email: 'm_mikaelian@mail.fhsu.edu'
			};
		
			try {
				await stripe.charges.create (param);
			} catch (error) {
				throw error
			}

	};

  	return (
		<div className='px-4 pt-8 leading-8 [&>h1]:text-2xl [&>h1]:py-4 [&>h1]:font-bold '>
		<h1>My wallet</h1>
		<h2>Account balance: {} </h2>
		<form action={handleTopUp}>
			<button type='submit' > Top Up Balance By 20 USD</button>
		</form>
		</div>
  	);
}
