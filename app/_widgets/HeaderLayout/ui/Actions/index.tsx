import Link from 'next/link'
import type { FC } from 'react'
import { cn } from '@shared/lib/utils'
import Icon from '@shared/ui/Icon'
import ACTION_LIST from '@widgets/HeaderLayout/const/actions-list'

const Actions: FC = () => {
    return (
        <div
            className={`
              flex items-center gap-6
              max-lg:mt-auto max-lg:justify-center
            `}
        >
            {ACTION_LIST.map((item) => (
                <Link
                    href={item.href}
                    className={cn(
                        `
                          flex size-8 shrink-0 items-center justify-center rounded-full border border-current duration-300
                          hover:opacity-70
                          lg:text-black
                        `
                    )}
                    key={item.icon}
                >
                    <Icon name={item.icon} />
                </Link>
            ))}
        </div>
    )
}

export default Actions
