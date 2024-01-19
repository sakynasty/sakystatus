/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				},
				up: {
					light: '#22c55e',
					DEFAULT: '#22c55e',
					dark: '#166534'
				},
				degraded: {
					light: '#fb923c',
					DEFAULT: '#fb923c',
					dark: '#ea580c'
				},
				down: {
					light: '#f87171',
					DEFAULT: '#f87171',
					dark: '#991b1b'
				}
			}
		}
	},
	plugins: [require('flowbite/plugin')]
};
