module.exports = {
    content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `plugins/**/*.{js,ts}`,
        `nuxt.config.{js,ts}`
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            'white'         : '#FFFFFF',
            'light-grey'    : '#C1C1C2',
            'grey'          : '#3E3E3F',
            'black'         : '#262525',
            'teal'          : '#19A8AE',
            'bronze'        : '#AD8D18'
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
