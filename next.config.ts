import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: [], // Empty for local imports
		// https://res.cloudinary.com/karso/image/upload/v1624874114/Portfolio/Project%20Screenshots/p8yvzprijsyuro2h9gtb.png
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/karso/image/upload/**",
			},
		],
	},
	// Ensure Netlify uses the correct runtime
	output: "standalone", // Optional but recommended for serverless
};

export default nextConfig;
