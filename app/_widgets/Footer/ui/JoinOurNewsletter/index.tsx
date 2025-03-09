'use client'
import type { FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { emailPattern } from '@shared/const/validation'
import { Button } from '@shared/ui/Button'
import Input from '@shared/ui/Input'

interface JoinOurNewsletterFormType {
    email: string
}

const JoinOurNewsletter: FC = () => {
    const { register, reset, handleSubmit } = useForm<JoinOurNewsletterFormType>({
        mode: 'onTouched'
    })

    const handleSubmitForm: SubmitHandler<JoinOurNewsletterFormType> = () => reset()

    return (
        <div
            className={`
              flex w-min flex-col gap-7 rounded-md bg-dark-400 p-4
              max-[1439px]:w-full
            `}
        >
            <h3
                className={`
                  text-[16px] font-semibold
                  md:text-lg
                `}
            >
                Join Our Newsletter
            </h3>
            <div className='flex flex-col gap-5'>
                <form className='flex items-center' onSubmit={handleSubmit(handleSubmitForm)}>
                    <Input
                        {...register('email', {
                            required: 'Email is required',
                            pattern: emailPattern
                        })}
                        placeholder='Your email address'
                        className={`
                          min-w-[172px] rounded-l-sm border-none bg-dark-200 p-2 text-[11px] font-normal
                          placeholder:text-gray-500
                        `}
                    />
                    <Button size='sm' className='rounded-l-none'>
                        Subscribe
                    </Button>
                </form>
                <p className='text-[13px] font-medium text-gray-400'>* Will send you weekly updates for your better tool management.</p>
            </div>
        </div>
    )
}

export default JoinOurNewsletter
