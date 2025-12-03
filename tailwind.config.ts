/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'brand-primary': 'var(--color-brand-primary)',
                'brand-primary-dark': 'var(--color-brand-primary-dark)',
                'brand-secondary': 'var(--color-brand-secondary)',
                'brand-accent': 'var(--color-brand-accent)',
                'brand-accent-alt': 'var(--color-brand-accent-alt)',
                'brand-neutral': 'var(--color-brand-neutral)',
                'site-bg': 'var(--color-site-bg)',
                gray: {
                    50: 'rgb(249 250 251)',
                    100: 'rgb(243 244 246)',
                    200: 'rgb(229 231 235)',
                    300: 'rgb(209 213 219)',
                    400: 'rgb(156 163 175)',
                    500: 'rgb(107 114 128)',
                    600: 'rgb(75 85 99)',
                    700: 'rgb(55 65 81)',
                    800: 'rgb(31 41 55)',
                    900: 'rgb(17 24 39)',
                    950: 'rgb(3 7 18)'
                },
                white: '#ffffff',
                black: '#000000',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
                heading: ['var(--font-outfit)', 'Outfit', 'var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            animation: {
                'blob': 'blob 7s infinite',
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                blob: {
                    '0%, 100%': { transform: 'scale(1) translate(0px, 0px)' },
                    '33%': { transform: 'scale(1.1) translate(30px, -50px)' },
                    '66%': { transform: 'scale(0.9) translate(-20px, 20px)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
