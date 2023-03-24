/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				mono: ["\"Space Mono\"", "monospace"],
			},
			backgroundImage: {
				"main-gradient": "linear-gradient(to right bottom, #ef9ccb, #ea97cf, #e492d4, #dc8dd9, #d28adf, #bb97ef, #a1a2fa, #85adff, #57c4ff, #23d9ff, #27ebff, #5ffbf1)",
				"reverse-gradient": "linear-gradient(to right bottom, #5ffbf1, #27ebff, #23d9ff, #57c4ff, #85adff, #a1a2fa, #bb97ef, #d28adf, #dc8dd9, #e492d4, #ea97cf, #ef9ccb)",
			}
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
	],
};
