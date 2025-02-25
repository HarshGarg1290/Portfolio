/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				navy: {
					800: "#272829",
					900: "#000000",
				},
			},
			backgroundImage: {
				"radial-gray":
					"radial-gradient(circle, rgba(200,200,200,0.15) 0%, rgba(0,0,0,0) 80%)",
			},
			fontFamily: {
				spacegrotesk: ["Space Grotesk", "serif"],
				ptsans: ["PT Sans", "serif"],
			},
		},
	},
	plugins: [],
};
