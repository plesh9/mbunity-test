'use client'
import { type FC, type PropsWithChildren } from 'react'
import { cn } from '@shared/lib/utils'
import Container from '@shared/ui/Container'
import Logo from '@shared/ui/Logo'
import s from './HeaderLayout.module.scss'
import useHeaderScroll from './hooks/useHeaderScroll'
import Actions from './ui/Actions'
import BurgerMenu from './ui/BurgerMenu'
import Navigation from './ui/Navigation'

const HeaderLayout: FC<PropsWithChildren> = ({ children }) => {
    const { isActive, headerRef } = useHeaderScroll()

    return (
        <div
            className={`
              flex grow flex-col gap-4 pt-[57px]
              lg:pt-[72px]
            `}
        >
            <header
                ref={headerRef}
                className={cn(
                    'absolute left-0 top-0 z-10 w-full duration-500',
                    isActive
                        ? `
                          fixed bg-white py-4 shadow-sm
                          ${s.animateIn}
                        `
                        : `
                          pt-7
                          lg:pt-10
                        `
                )}
            >
                <Container className={'max-w-screen-xl flex-row items-center justify-between gap-4'}>
                    <Logo className='max-lg:text-lg' />
                    <div
                        className={`
                          flex items-center gap-14
                          max-lg:hidden
                        `}
                    >
                        <Navigation />
                        <Actions />
                    </div>
                    <BurgerMenu />
                </Container>
            </header>
            {children}
        </div>
    )
}

export default HeaderLayout
