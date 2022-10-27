/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				doctortheme: {
					primary: "#0FCFEC",
					secondary: "#19D3AE",
					accent: "#647393",
					neutral: "#0C7592",
					"base-100": "#ffffff",
				},
			},
			"dark",
			"cupcake",
		],
	},

	plugins: [require("daisyui")],
}