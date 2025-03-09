import { Portal } from '@radix-ui/react-portal'
import { useState, type FC } from 'react'
import { cn } from '@shared/lib/utils'
import Icon from '@shared/ui/Icon'
import Logo from '@shared/ui/Logo'
import ScrollLock from '@shared/ui/ScrollLock'
import Actions from '../Actions'
import Navigation from '../Navigation'
import s from './BurgerMenu.module.scss'

const BurgerMenu: FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen((prevIsOpen) => !prevIsOpen)

    return (
        <div className='lg:hidden'>
            <button onClick={toggle} type='button'>
                <Icon name='burger' />
            </button>
            {isOpen && (
                <Portal>
                    <ScrollLock />
                    <div
                        onClick={(e) => {
                            if ((e.target as HTMLDivElement).closest('a')) {
                                toggle()
                            }
                        }}
                        className={cn(
                            `
                              fixed right-0 top-0 z-40 flex size-full max-w-[360px] flex-col gap-[60px] overflow-y-auto overflow-x-hidden bg-black px-5 py-8 text-white
                              lg:hidden
                            `,
                            s.animateIn
                        )}
                    >
                        <div className='flex items-center justify-between gap-3'>
                            <Logo className='text-lg' />
                            <button onClick={toggle} type='button'>
                                <Icon name='close' />
                            </button>
                        </div>
                        <Navigation />
                        <Actions />
                    </div>
                </Portal>
            )}
        </div>
    )
}

export default BurgerMenu
