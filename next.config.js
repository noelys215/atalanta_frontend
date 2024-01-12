/** @type {import('next').NextConfig} */
module.exports = {
	publicRuntimeConfig: {
		name: process.env.API_URL,
		description: process.env.API_URL,
	},
	env: {
		API_URL: 'https://qngqx3gm6p.us-east-1.awsapprunner.com/api',
		JWT_SECRET: 'atalanta2022',
		PAYPAL_CLIENT_ID:
			'AXs5w5oEi2r8q0gSNMLg5U5rQ2LoAljRl7s2nPB5YL1Z59hi70UM2oYUZHDxGeB5-gA8qnGZaY0dSXiA',
		RECAPTCHA_SITE_KEY: '6LebRP8fAAAAABONrTiKwUj2Br63we6hMkumMH6p',
		RECAPTCHA_SECRET_KEY: '6LebRP8fAAAAABWowPhiYyKOz0GeHgSnYpQytSqp',
	},
	distDir: 'build',
	reactStrictMode: false,
	images: {
		domains: ['cdn.sanity.io', 'localhost', '127.0.0.1', 'res.cloudinary.com'],
		loader: 'default',
		unoptimized: true,
	},
	webpack(config, { isServer }) {
		if (!isServer) {
			config.plugins.push(
				new webpack.DefinePlugin({
					'process.exit': function () {
						return null;
					},
				})
			);
		}
		return config;
	},
};
