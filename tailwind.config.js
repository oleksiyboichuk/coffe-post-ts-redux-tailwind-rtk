/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				titillium: ['Titillium Web', 'sans-serif'],
			},
			colors: {
				conduit: {
					100: '#F9FAF4',
					150: '#eaebe5',
					200: '#4A6163',
					300: '#F9A66C',
					400: '#FFC94B',
					500: '#F17A7E',
					600: '#C58353',
					green: '#F17A7E',
					darkGreen: '#3d8b3d',
					gray: '#bbb',
					darkestGray: '#373a3c',
					darkenGray: '#999',
					followB: '#ccc',
					tag: '#aaa',
					lightenGray: '#ddd',
					pageHoverBg: '#eceeef',
					tagCloudBg: '#f3f3f3',
					tagItemBg: '#818a91',
					tagItemBgDarken: '#587077',
				}
			},
			spacing: {
				'0.2': '0.2rem',
				'0.3': '0.3rem',
				navItem: '0.425rem',
				'tag': '0.6rem',
				'1.8': '1.8rem',
				'25': '6.25rem',
			},
			boxShadow: {
				banner: 'inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%)',
			},
			dropShadow: {
				logo: '0px 1px 3px rgb(0 0 0 / 30%)',
			},
			fontSize: {
				date: '0.8rem',
				buttonSm: '0.875rem',
				logo: '3.5rem',
				article: '2.8rem',
			},
			lineHeight: {
				articleTitle: '1.1',
			}
		},
	},
	plugins: [],
}