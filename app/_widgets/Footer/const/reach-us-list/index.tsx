import type { ReactNode } from 'react'
import type { IconType } from '@shared/const/icons'
import { CONTACT_ADRESS, CONTACT_LINKS, CONTACT_MAIL, CONTACT_PHONE } from '@shared/const/links/contacts'

interface ContactItemType {
    icon: IconType
    title: ReactNode
    href: string
}

const REACH_US_LIST: Array<ContactItemType> = [
    {
        icon: 'phone',
        title: CONTACT_PHONE,
        href: CONTACT_LINKS.PHONE
    },
    {
        icon: 'mail',
        title: CONTACT_MAIL,
        href: CONTACT_LINKS.MAIL
    },
    {
        icon: 'geo',
        title: CONTACT_ADRESS,
        href: CONTACT_LINKS.GEO
    }
]

export default REACH_US_LIST
