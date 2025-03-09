import debounce from 'lodash/debounce'
import { useEffect, useRef, useState } from 'react'

const useHeaderScroll = () => {
    const [isActive, setIsActive] = useState(false)
    const headerRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const handleScroll = debounce(() => {
            if (!headerRef.current) return

            if (window.scrollY > headerRef.current?.clientHeight) {
                setIsActive(true)
            } else if (window.scrollY === 0) {
                setIsActive(false)
            }
        }, 300)

        handleScroll()
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return { isActive, headerRef }
}

export default useHeaderScroll
