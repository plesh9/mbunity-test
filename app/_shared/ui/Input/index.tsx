import type { InputHTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'
import { cn } from '@shared/lib/utils'

export interface InputPropsType extends Omit<InputHTMLAttributes<HTMLInputElement>, 'title'> {
    error?: string
    title?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputPropsType>(({ className, name, error, title, ...restProps }, ref) => {
    return (
        <label className={'flex w-full flex-col gap-1'} htmlFor={name}>
            {title && <p className={'text-[12px] font-medium text-gray-300'}>{title}</p>}
            <input className={cn(className)} ref={ref} name={name} {...restProps} />
            {error && <p className='text-[12px] font-medium text-red-500'>{error}</p>}
        </label>
    )
})

Input.displayName = 'Input'

export default Input
