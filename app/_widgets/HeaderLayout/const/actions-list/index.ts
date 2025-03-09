import type { IconType } from '@shared/const/icons'
import ROUTES from '@shared/const/routes'

interface ActionItemType {
    href: string
    icon?: IconType
}

const ACTION_LIST: Array<ActionItemType> = [
    {
        href: ROUTES.HOME,
        icon: 'profile'
    },
    {
        href: ROUTES.HOME,
        icon: 'cart'
    }
]

export default ACTION_LIST
