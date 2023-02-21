/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['links.papareact.com', 'upload.wikimedia.org', 'seeklogo.com'],
	},
}
