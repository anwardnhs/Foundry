import tailwindcssAnimate from "tailwindcss-animate"
import colors from "tailwindcss/colors.js"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			ink: '#0A0A0A',
			navy: '#0A2540',
			muted: '#425466',
			surface: '#F6F9FC',
			slate: { ...colors.slate, DEFAULT: '#1C1C1E' },
  			mist: '#F5F5F7',
  			accent: '#004ADD',
  			subtle: '#6E6E73',
  			rule: '#E5E5EA'
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono',
  				'monospace'
  			]
  		},
  		fontSize: {
  			'display-xl': [
  				'96px',
  				{
  					lineHeight: '1.05',
  					letterSpacing: '-0.03em'
  				}
  			],
  			'display-lg': [
  				'72px',
  				{
  					lineHeight: '1.05',
  					letterSpacing: '-0.03em'
  				}
  			],
  			'display-md': [
  				'56px',
  				{
  					lineHeight: '1.08',
  					letterSpacing: '-0.02em'
  				}
  			],
  			'display-sm': [
  				'40px',
  				{
  					lineHeight: '1.1',
  					letterSpacing: '-0.02em'
  				}
  			],
  			'body-xl': [
  				'20px',
  				{
  					lineHeight: '1.6'
  				}
  			],
  			'body-lg': [
  				'16px',
  				{
  					lineHeight: '1.6'
  				}
  			],
  			'body-md': [
  				'14px',
  				{
  					lineHeight: '1.6'
  				}
  			],
  			'body-sm': [
  				'12px',
  				{
  					lineHeight: '1.5'
  				}
  			]
  		},
  		maxWidth: {
  			site: '1440px'
  		},
  		spacing: {
  			'site-x': '80px',
  			'site-x-mobile': '24px'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
}
