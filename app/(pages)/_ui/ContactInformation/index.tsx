import type { FC } from 'react'
import ContactList from './ui/ContactList'
import Ellipses from './ui/Ellipses'
import SocialList from './ui/SocialList'

const ContactInformation: FC = () => {
    return (
        <div
            className={`
              flex w-full flex-col
              xl:max-w-[501px] xl:p-[10px] xl:pr-0
            `}
        >
            <div
                className={`
                  relative flex min-h-fit flex-col overflow-hidden rounded-[10px] bg-black p-4
                  max-md:items-center max-md:text-center
                  md:min-h-[647px] md:p-10
                  xl:rounded-br-none
                `}
            >
                <Ellipses />
                <div className={'relative flex grow flex-col gap-[58px] rounded-full'}>
                    <div
                        className={`
                          flex grow flex-col gap-3
                          max-md:items-center
                          md:gap-[111px]
                        `}
                    >
                        <div className={'flex flex-col gap-2'}>
                            <h2
                                className={`
                                  text-xl font-semibold leading-[150%] text-white
                                  md:text-[28px]
                                `}
                            >
                                Contact Information
                            </h2>
                            <p
                                className={`
                                  text-[12px] text-gray-200
                                  md:text-lg
                                `}
                            >
                                Say something to start a live chat!
                            </p>
                        </div>
                        <ContactList />
                    </div>
                    <SocialList />
                </div>
            </div>
        </div>
    )
}

export default ContactInformation
