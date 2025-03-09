import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@shared/lib/utils'

const buttonVariants = cva(
    `
      inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium duration-300
      focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
      disabled:opacity-30
      [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
    `,
    {
        variants: {
            variant: {
                default: `
                  bg-black text-white
                  hover:opacity-80
                `
            },
            size: {
                default: `
                  h-10
                  md:h-[54px] md:px-12
                  px-5 py-3 rounded-sm
                `,
                sm: 'h-9 px-5 py-3 text-[12px] font-medium rounded-sm'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})

Button.displayName = 'Button'

export { Button, buttonVariants }
