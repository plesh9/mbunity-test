import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
    darkMode: 'class',
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-poppins)', 'var(--font-roboto)', 'var(--font-inter)', ...fontFamily.sans],
                roboto: ['var(--font-roboto)', ...fontFamily.sans],
                inter: ['var(--font-inter)', ...fontFamily.sans]
            },
            colors: {
                black: '#000000',
                white: '#FFFFFF',
                gray: {
                    50: '#FBFBFB',
                    100: '#E0E0E0',
                    200: '#C9C9C9',
                    300: '#8D8D8D',
                    400: '#717171',
                    500: '#616161'
                },
                dark: {
                    100: '#1F1F1F',
                    200: '#1E1E1E',
                    300: '#1B1B1B',
                    400: '#131313'
                },
                red: {
                    500: '#ff5c53'
                }
            },
            borderRadius: {
                lg: '12px',
                md: '8px',
                sm: '4px'
            }
        }
    },
    plugins: [require('tailwindcss-animate')]
} satisfies Config
