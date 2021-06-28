module.exports = {
	purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins'],
			},
			colors: {
				brgreen: {
					DEFAULT: '#1DB954',
					50: '#C6F6D7',
					100: '#AFF3C7',
					200: '#83ECA8',
					300: '#57E589',
					400: '#2BDE6A',
					500: '#1DB954',
					600: '#168D40',
					700: '#0F612C',
					800: '#083518',
					900: '#010904',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
