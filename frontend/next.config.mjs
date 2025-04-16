/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
				// new URL('https://cdn.sanity.io/images/*')
			},
		],
	},
};

export default nextConfig;
