import type { FC } from 'react'
import type { useForm } from 'react-hook-form'
import { Checkbox } from '@shared/ui/Checkbox'
import type { MessageFormType } from '../..'

interface Props {
    formConfig: ReturnType<typeof useForm<MessageFormType>>
}

const Topics: FC<Props> = ({ formConfig }) => {
    const { watch, setValue } = formConfig
    const topic = watch('topic')

    return (
        <div className='flex flex-col gap-3'>
            <h3 className='text-base font-semibold'>Select Subject?</h3>
            <div className='inline-flex flex-wrap gap-5 whitespace-nowrap'>
                {['1', '2', '3', '4'].map((value) => (
                    <Checkbox
                        checked={topic === value}
                        onClick={() => {
                            setValue('topic', topic === value ? '' : value)
                        }}
                        title='General Inquiry'
                        key={value}
                    />
                ))}
            </div>
        </div>
    )
}

export default Topics
