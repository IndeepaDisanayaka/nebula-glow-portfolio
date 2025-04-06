
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom colors for our portfolio
				dark: {
					100: '#1a1a2e',
					200: '#16213e',
					300: '#0f172a',
					400: '#0a0a14', 
					500: '#080810',
				},
				neon: {
					blue: '#00e6ff',
					purple: '#b832fb',
					pink: '#ff2cf3',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-down': {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'glow': {
					'0%': { filter: 'brightness(100%) drop-shadow(0 0 0px rgba(0, 230, 255, 0.7))' },
					'50%': { filter: 'brightness(120%) drop-shadow(0 0 8px rgba(0, 230, 255, 0.9))' },
					'100%': { filter: 'brightness(100%) drop-shadow(0 0 0px rgba(0, 230, 255, 0.7))' },
				},
				'neon-pulse': {
					'0%, 100%': { 
						'text-shadow': '0 0 10px rgba(0, 230, 255, 0.8), 0 0 20px rgba(0, 230, 255, 0.6), 0 0 30px rgba(0, 230, 255, 0.4)' 
					},
					'50%': { 
						'text-shadow': '0 0 15px rgba(0, 230, 255, 0.9), 0 0 25px rgba(0, 230, 255, 0.7), 0 0 35px rgba(0, 230, 255, 0.5)' 
					},
				},
				'neon-pulse-purple': {
					'0%, 100%': { 
						'text-shadow': '0 0 10px rgba(184, 50, 251, 0.8), 0 0 20px rgba(184, 50, 251, 0.6), 0 0 30px rgba(184, 50, 251, 0.4)' 
					},
					'50%': { 
						'text-shadow': '0 0 15px rgba(184, 50, 251, 0.9), 0 0 25px rgba(184, 50, 251, 0.7), 0 0 35px rgba(184, 50, 251, 0.5)' 
					},
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-up': 'fade-up 0.7s ease-out',
				'fade-down': 'fade-down 0.7s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'neon-pulse': 'neon-pulse 2s infinite',
				'neon-pulse-purple': 'neon-pulse-purple 2s infinite',
				'float': 'float 3s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'neon-glow': 'linear-gradient(180deg, rgba(0, 230, 255, 0.15) 0%, rgba(0, 230, 255, 0) 100%)',
				'neon-glow-purple': 'linear-gradient(180deg, rgba(184, 50, 251, 0.15) 0%, rgba(184, 50, 251, 0) 100%)',
				'hero-gradient': 'linear-gradient(to bottom, rgba(10, 10, 20, 0.8), rgba(8, 8, 16, 0.95))',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
