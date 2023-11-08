/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
		appDir: true,
	},
	images: {
		domains: [
			'images.unsplash.com',
			'plus.unsplash.com',
			't3.ftcdn.net',
			'lh3.googleusercontent.com',
			'axiumradonmitigations.com',
		],
	},
}

module.exports = nextConfig
