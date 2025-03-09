'use client'
import Image from 'next/image'
import type { FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { Button } from '@shared/ui/Button'
import LETTER from '../../_assets/letter.png'
import ContactFields from './ui/ContactFields'
import MessageField from './ui/MessageField'
import Topics from './ui/Topics'

export interface MessageFormType {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    message: string
    topic: string
}

const MessageForm: FC = () => {
    const formConfig = useForm<MessageFormType>({
        mode: 'onTouched',
        defaultValues: {
            topic: '1'
        }
    })

    const handleSubmitForm: SubmitHandler<MessageFormType> = () => {
        formConfig.reset()
    }

    return (
        <div
            className={`
              relative flex grow flex-col overflow-hidden px-2 py-8 pb-[60]
              xl:px-[50px] xl:pt-[60px]
            `}
        >
            <Image
                src={LETTER}
                width={240}
                height={112}
                className={`
                  pointer-events-none absolute -bottom-3 left-[40%] -translate-x-1/2 select-none object-cover
                  max-md:h-[52px] max-md:w-[104px]
                  md:-bottom-9 md:right-0 md:-translate-x-1/2
                `}
                alt=''
            />
            <form
                className={`
                  relative flex grow flex-col gap-6
                  md:gap-12
                `}
                onSubmit={formConfig.handleSubmit(handleSubmitForm)}
            >
                <ContactFields formConfig={formConfig} />
                <Topics formConfig={formConfig} />
                <MessageField formConfig={formConfig} />
                <Button
                    className={`
                      self-end
                      max-md:w-full
                    `}
                >
                    Send Message
                </Button>
            </form>
        </div>
    )
}

export default MessageForm
