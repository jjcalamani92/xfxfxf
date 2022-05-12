module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				primaryColor: "#FFC107",
				darkPrimaryColor: "#FFA000",
				lightPrimaryColor: "#FFECB3",
				primaryText: "#212121",
				secondaryText: "#757575",
				accentColor: "#FFC107",
				backgroundColor: "#eee"
			}
		}
	},
	plugins: []
};
