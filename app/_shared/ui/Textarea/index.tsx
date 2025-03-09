import type { ReactNode, TextareaHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import { cn } from '@shared/lib/utils'

interface Props extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'title'> {
    error?: string
    title?: ReactNode
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(({ className, name, error, title, ...restProps }, ref) => {
    return (
        <label className={'flex flex-col gap-1'} htmlFor={name}>
            {title && <p className={'text-[12px] font-medium text-gray-300'}>{title}</p>}
            <textarea className={cn(className)} ref={ref} name={name} {...restProps} />
            {error && <p className='text-[12px] font-medium text-red-500'>{error}</p>}
        </label>
    )
})

Textarea.displayName = 'Textarea'

export default Textarea
