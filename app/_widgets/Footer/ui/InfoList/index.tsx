import type { FC } from 'react'
import ROUTES from '@shared/const/routes'
import InfoBlock from './ui/InfoBlock'

const InfoList: FC = () => {
    return (
        <>
            <InfoBlock
                title='Company'
                list={[
                    {
                        title: 'About',
                        href: ROUTES.HOME
                    },
                    {
                        title: 'Contact',
                        href: ROUTES.HOME
                    },
                    {
                        title: 'Blogs',
                        href: ROUTES.HOME
                    }
                ]}
            />
            <InfoBlock
                title='Legal'
                list={[
                    {
                        title: 'Privacy Policy',
                        href: ROUTES.HOME
                    },
                    {
                        title: 'Terms & Services',
                        href: ROUTES.HOME
                    },
                    {
                        title: 'Terms of Use',
                        href: ROUTES.HOME
                    },
                    {
                        title: 'Refund Policy',
                        href: ROUTES.HOME
                    }
                ]}
            />
            <InfoBlock
                title='Quick Links'
                list={[
                    {
                        title: 'Techlabz Keybox',
                        href: ROUTES.HOME
                    },
                    {
                        title: 'Downloads',
                        href: ROUTES.HOME
                    },
                    {
                        title: 'Forum',
                        href: ROUTES.HOME
                    }
                ]}
            />
        </>
    )
}

export default InfoList
