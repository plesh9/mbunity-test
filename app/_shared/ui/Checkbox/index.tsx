'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as React from 'react'
import { cn } from '@shared/lib/utils'
import Icon from '../Icon'

interface Props extends Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'title'> {
    title?: React.ReactNode
}

const Checkbox = React.forwardRef<React.ComponentRef<typeof CheckboxPrimitive.Root>, Props>(({ className, title, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            `
              flex items-center gap-2
              focus-visible:outline-none
              disabled:cursor-not-allowed disabled:opacity-50
            `,
            className
        )}
        {...props}
    >
        <span className={'relative size-3 shrink-0 self-start overflow-hidden rounded-full bg-gray-100'}>
            <CheckboxPrimitive.Indicator className={'absolute inset-0 m-auto flex items-center justify-center bg-black text-white'}>
                <Icon name='check' size={2} />
            </CheckboxPrimitive.Indicator>
        </span>
        {title && <span className='text-[12px] leading-[100%]'>{title}</span>}
    </CheckboxPrimitive.Root>
))

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
