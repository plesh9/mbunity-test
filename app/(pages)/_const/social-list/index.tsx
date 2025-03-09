import type { IconType } from '@shared/const/icons'
import SOCIAL_LINKS from '@shared/const/links/socials'

interface ContactItemType {
    icon: IconType
    href: string
}

const SOCIAL_LIST: Array<ContactItemType> = [
    {
        icon: 'twitter',
        href: SOCIAL_LINKS.twitter
    },
    {
        icon: 'instagram',
        href: SOCIAL_LINKS.instagram
    },
    {
        icon: 'discord',
        href: SOCIAL_LINKS.discord
    }
]

export default SOCIAL_LIST
