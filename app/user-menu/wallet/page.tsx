import React from 'react'
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

export default function Wallet() {
	return (
		<div className=' px-4 pt-8 leading-8 [&>h1]:text-2xl [&>h1]:py-4 [&>h1]:font-bold '>
			<h1>My wallet</h1>{' '}
			
			<h2>Account balance: {}</h2>
			<button>
				Top-up balance 
			</button>

			</div>
	)
}
