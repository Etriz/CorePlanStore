/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
	allowedDevOrigins: ['localhost:3000'],
};

export default nextConfig;
