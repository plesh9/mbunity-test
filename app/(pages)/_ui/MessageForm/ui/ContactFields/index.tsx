import type { FC } from 'react'
import type { useForm } from 'react-hook-form'
import { emailPattern, phonePattern } from '@shared/const/validation'
import Input from '@shared/ui/Input'
import type { MessageFormType } from '../..'

interface Props {
    formConfig: ReturnType<typeof useForm<MessageFormType>>
}

const ContactFields: FC<Props> = ({ formConfig }) => {
    const { register } = formConfig

    return (
        <div
            className={`
              grid gap-x-10 gap-y-5
              md:grid-cols-2 md:gap-y-12
            `}
        >
            <Input
                {...register('firstName', {
                    required: 'First Name is required'
                })}
                title='First Name'
                placeholder='Write your first name'
            />
            <Input
                {...register('lastName', {
                    required: 'Last Name is required'
                })}
                title='Last Name'
                placeholder='Write your last name'
            />
            <Input
                {...register('email', {
                    required: 'Email is required',
                    pattern: emailPattern
                })}
                title='Email'
                placeholder='demo@gmail.com'
            />
            <Input
                {...register('phoneNumber', {
                    required: 'Phone Number is required',
                    pattern: phonePattern
                })}
                title='Phone Number'
                placeholder='+10123456789'
            />
        </div>
    )
}

export default ContactFields
