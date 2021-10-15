module.exports = {
	mode: 'jit',
	purge: {
		content: [
			`components/**/*.{vue,js}`,
			`layouts/**/*.vue`,
			`pages/**/*.vue`,
			`plugins/**/*.{js,ts}`,
			`nuxt.config.{js,ts}`
		]
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			'dark-purple'   : '#1B1529',
			'medium-purple' : '#2F315A',
			'light-purple'  : '#454EA0',
			'dark-blue'     : '#0f084b',
			'medium-blue'   : '#26408b',
			'light-blue'    : '#46B4C3',
			'cyan'          : '#19a8ae',
			'dark-green'    : '#004643',
			'yellow'        : '#FFDF6E',
			'pink'          : '#EA87B6',
			'white'         : '#FFFFFF',
			'grey'          : '#eae8ed',
			'black'         : '#070707',
		},
		fontFamily: {
			'display' : ['Poiret One', 'cursive'],
			'sans'   : ['Montserrat', 'sans-serif'],
			'serif'    : ['Roboto Slab', 'serif']
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
