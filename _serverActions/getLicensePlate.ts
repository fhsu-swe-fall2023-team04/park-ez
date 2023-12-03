'use server'

import { utapi } from 'uploadthing/server'

export const getLicensePlate = async (files:File) => {
	const response = await utapi.uploadFiles(files)

	const url = `${process.env.LICENSE_PLATE_API_URL}?image_url=${response?.data?.url.toString()}`

	const license = await fetch(url, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': `${process.env.LICENSE_PLATE_API_KEY}`,
			'X-RapidAPI-Host': `${process.env.LICENSE_PLATE_API_HOST}`,
		}
	})
		.then((res) => res.json())
		.catch((err) => console.error(err))
	

		
	return(license.results[0].plate)
}
