import { Poppins, Inter, Roboto } from 'next/font/google'

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
})

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin']
})

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin']
})

export const fontVariables = [poppins.variable, roboto.variable, inter.variable]
