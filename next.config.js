/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	images: {
		domains: ['images.unsplash.com', 'plus.unsplash.com', 't3.ftcdn.net'],
	},
}

module.exports = nextConfig
