import type { FC } from 'react'
import Container from '@shared/ui/Container'
import ContactInformation from './_ui/ContactInformation'
import MessageForm from './_ui/MessageForm'

const page: FC = () => {
    return (
        <div
            className={`
              flex grow flex-col pt-4
              lg:pt-[72px]
            `}
        >
            <Container>
                <div className='flex flex-col gap-2'>
                    <h1
                        className={`
                          text-center text-2xl font-bold leading-[140%]
                          xl:text-[40px]
                        `}
                    >
                        Contact Us
                    </h1>
                    <p
                        className={`
                          mx-auto text-center text-sm text-gray-400
                          max-md:max-w-[184px]
                          xl:text-lg
                        `}
                    >
                        Any question or remarks? Just write us a message!
                    </p>
                </div>
                <div
                    className={`
                      flex rounded-[10px] bg-white
                      max-xl:flex-col
                    `}
                >
                    <ContactInformation />
                    <MessageForm />
                </div>
            </Container>
        </div>
    )
}

export default page
