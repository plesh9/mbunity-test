import type { IconType } from '@shared/const/icons'
import ROUTES from '@shared/const/routes'

interface NavigationItemType {
    href: string
    title: string
    icon?: IconType
    isReverse?: boolean
    isActive?: boolean
}

const NAVIGATION_LIST: Array<NavigationItemType> = [
    {
        href: ROUTES.HOME,
        title: 'Home'
    },
    {
        href: ROUTES.HOME,
        title: 'Features',
        icon: 'arrowDown',
        isReverse: true
    },
    {
        href: ROUTES.HOME,
        title: 'Blog'
    },
    {
        href: ROUTES.HOME,
        title: 'Shop'
    },
    {
        href: ROUTES.HOME,
        title: 'About'
    },
    {
        href: ROUTES.HOME,
        title: 'Contact',
        isActive: true
    }
]

export default NAVIGATION_LIST
