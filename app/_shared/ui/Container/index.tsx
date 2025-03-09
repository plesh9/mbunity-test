import type { ComponentProps, FC } from 'react'
import { cn } from '@shared/lib/utils'

const Container: FC<ComponentProps<'div'>> = ({ className, children, ...rest }) => {
    return (
        <div
            className={cn(
                `
                  mx-auto flex w-full max-w-[1236px] grow flex-col gap-5 px-5
                  xl:gap-[50px]
                `,
                className
            )}
            {...rest}
        >
            {children}
        </div>
    )
}

export default Container
