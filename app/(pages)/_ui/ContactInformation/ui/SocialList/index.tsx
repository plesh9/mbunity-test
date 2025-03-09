import Link from 'next/link'
import type { FC } from 'react'
import Icon from '@shared/ui/Icon'
import SOCIAL_LIST from '@pages/_const/social-list'

const SocialList: FC = () => {
    return (
        <div
            className={`
              flex items-center gap-6
              max-md:justify-center
            `}
        >
            {SOCIAL_LIST.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    target='_blank'
                    rel='noreferrer'
                    className={`
                      flex size-8 shrink-0 items-center justify-center gap-6 rounded-full bg-dark-300 text-white duration-300
                      hover:bg-white hover:text-dark-300
                    `}
                >
                    <Icon name={item.icon} />
                </Link>
            ))}
        </div>
    )
}

export default SocialList
