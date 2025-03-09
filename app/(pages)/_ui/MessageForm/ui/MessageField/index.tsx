import type { FC } from 'react'
import type { useForm } from 'react-hook-form'
import { useAutosizeTextarea } from '@shared/hooks/useAutosizeTextarea'
import Textarea from '@shared/ui/Textarea'
import type { MessageFormType } from '../..'

interface Props {
    formConfig: ReturnType<typeof useForm<MessageFormType>>
}

const MessageField: FC<Props> = ({ formConfig }) => {
    const { watch, register } = formConfig
    const textareaRef = useAutosizeTextarea(watch('message'), {
        min: 29,
        max: 68
    })

    return (
        <Textarea
            {...register('message', {
                required: 'Message is required'
            })}
            ref={(ref) => {
                textareaRef.current = ref
                register('message').ref(ref)
            }}
            title='Message'
            placeholder='Write your message'
            className='h-[29px]'
        />
    )
}

export default MessageField
