/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
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
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                heading: ['var(--font-outfit)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
