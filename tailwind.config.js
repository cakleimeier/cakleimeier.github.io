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
			'dark-brown'    : '#28231c',
			'medium-brown'  : '#513b3c',
			'light-brown'   : '#655356',
			'black'         : '#070707',
			'dark-purple'   : '#0d0221',
			'bright-purple' : '#42084b',
			'light-purple'  : '#847996',
			'dark-blue'     : '#0f084b',
			'bright-blue'   : '#26408b',
			'cyan'          : '#19a8ae',
			'dark-green'    : '#004643',
			'off-white'     : '#f4ecd6',
			'grey'          : '#eae8ed'
		},
		fontFamily: {
			'display' : ['Oxanium', 'cursive'],
			'sans'   : ['Oxygen', 'sans-serif'],
			'serif'    : ['Roboto Slab', 'serif']
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
