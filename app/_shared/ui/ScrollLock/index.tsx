'use client'
import { type FC, useEffect } from 'react'

interface WithScrollLockProps {
    isLocked?: boolean
}

const ScrollLock: FC<WithScrollLockProps> = ({ isLocked = true }) => {
    useEffect(() => {
        const setScrollLock = (isLocked: boolean) => {
            // eslint-disable-next-line sonarjs/no-selector-parameter
            if (isLocked) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.removeProperty('overflow')
            }
        }

        const setPaddingRight = (padding: string) => {
            if (+padding) {
                document.body.style.paddingRight = padding
            } else {
                document.body.style.removeProperty('padding-right')
            }
        }

        const handleScrollLock = () => {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

            setScrollLock(isLocked)
            setPaddingRight(`${scrollBarWidth}px`)
        }

        handleScrollLock()
        window.addEventListener('scroll', handleScrollLock)

        return () => {
            window.removeEventListener('scroll', handleScrollLock)
            setPaddingRight('0')
            setScrollLock(false)
        }
    }, [isLocked])

    return null
}

export default ScrollLock
