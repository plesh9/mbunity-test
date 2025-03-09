import Link from 'next/link'
import type { FC } from 'react'
import { cn } from '@shared/lib/utils'
import Icon from '@shared/ui/Icon'
import NAVIGATION_LIST from '@widgets/HeaderLayout/const/navigation-list'

const Navigation: FC = () => {
    return (
        <nav
            className={`
              flex items-start gap-12
              max-lg:flex-col
              lg:items-center
            `}
        >
            {NAVIGATION_LIST.map((item) => (
                <Link
                    href={item.href}
                    className={cn(
                        `
                          flex items-center gap-1 whitespace-nowrap font-roboto text-base duration-300
                          hover:opacity-70
                          lg:text-dark-100
                        `,
                        item.isActive &&
                            `
                              font-semibold
                              hover:opacity-100
                              lg:text-black
                            `,
                        item.isReverse && 'flex-row-reverse'
                    )}
                    key={item.title}
                >
                    <Icon name={item.icon} />
                    {item.title}
                </Link>
            ))}
        </nav>
    )
}

export default Navigation
