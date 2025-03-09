import './(app)/_styles/globals.scss'
import NextTopLoader from 'nextjs-toploader'
import type { FC, PropsWithChildren } from 'react'
import { cn } from '@shared/lib/utils'
import Footer from '@widgets/Footer'
import HeaderLayout from '@widgets/HeaderLayout'
import { fontVariables } from '@app/_fonts'

const layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang='en' className={cn(...fontVariables)}>
            <body className='antialiased'>
                <NextTopLoader color='#1F1F1F' shadow={false} showSpinner={false} />
                <HeaderLayout>
                    <div className='flex grow flex-col'>{children}</div>
                    <Footer />
                </HeaderLayout>
            </body>
        </html>
    )
}

export default layout
