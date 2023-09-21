import { NextRequest } from 'next/server'

export const getLicensePlate = async (req: NextRequest) => {
	const resBody = await req.json()
	const url = process.env.LICENSE_PLATE_API_URL as string
	const image = 'https://cdn.smclk.net/rapidmarket/license-plate-detection.jpg'

	await fetch(url, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': `${process.env.LICENSE_PLATE_API_KEY}`,
			'X-RapidAPI-Host': `${process.env.LICENSE_PLATE_API_HOST}`,
		},
		body: JSON.stringify(resBody),
	})
		.then((res) => res.json())
		.catch((err) => console.error(err))
}
