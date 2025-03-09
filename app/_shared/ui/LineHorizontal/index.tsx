import type { ComponentProps, FC } from 'react'
import { cn } from '@shared/lib/utils'

const LineHorizontal: FC<ComponentProps<'div'>> = ({ className, ...rest }) => {
    return <div className={cn('h-px w-full shrink-0 bg-black', className)} {...rest} />
}

export default LineHorizontal
