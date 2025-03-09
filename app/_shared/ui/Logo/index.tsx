import Link from 'next/link'
import type { ComponentProps, FC } from 'react'
import ROUTES from '@shared/const/routes'
import { cn } from '@shared/lib/utils'

const Logo: FC<Omit<ComponentProps<typeof Link>, 'href'>> = ({ className, ...rest }) => {
    return (
        <Link
            href={ROUTES.HOME}
            className={cn(
                `
                  whitespace-nowrap font-inter text-2xl font-extrabold duration-300
                  hover:opacity-70
                `,
                className
            )}
            {...rest}
        >
            Logo Here
        </Link>
    )
}

export default Logo
