const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./storage/framework/views/*.php', './resources/views/**/*.blade.php'],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
        aspectRatio: {
            none: 0,
            square: [1, 1],
            "16/9": [16, 9],
            "4/3": [4, 3],
            "21/9": [21, 9]
        },
	debugScreens: {
		style: {
			backgroundColor: '#C0FFEE',
			color: 'black',
		}
	},
	truncate: {
		lines: {
			3: '3',
			5: '5',
			8: '8',
          	}
      },
    },

    variants: {
        aspectRatio: ['responsive'],
	backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
	borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
	scrollSnapType: ['responsive'],
	textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder']
    },

    plugins: [
	require('@tailwindcss/custom-forms'),
	require('@tailwindcss/typography'),
	require('@tailwindcss/ui'),
	require('@danestves/tailwindcss-darkmode')(),
        require('tailwindcss-aspect-ratio'),
	require('tailwindcss-dark-mode')(),
	require('tailwindcss-debug-screens'),
	require('tailwindcss-flexbox-order')(),
        require('tailwindcss-responsive-embed'),
	require('tailwindcss-scroll-snap'),
	require('tailwindcss-touch')(),
	require('tailwindcss-truncate-multiline')(),
    ],
};
