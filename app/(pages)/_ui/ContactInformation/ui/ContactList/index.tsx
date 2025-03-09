import Link from 'next/link'
import type { FC } from 'react'
import Icon from '@shared/ui/Icon'
import CONTACT_LIST from '@pages/_const/contact-list'

const ContactList: FC = () => {
    return (
        <div
            className={`
              flex max-w-[221px] flex-col gap-4
              max-md:items-center
              md:gap-[50px]
            `}
        >
            {CONTACT_LIST.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    target='_blank'
                    rel='noreferrer'
                    className={`
                      flex w-fit items-center gap-2 text-white duration-300
                      hover:opacity-70
                      max-md:flex-col max-md:items-center max-md:justify-center
                      md:gap-6
                    `}
                >
                    <Icon className='md:self-start' name={item.icon} size={6} />
                    <span>{item.title}</span>
                </Link>
            ))}
        </div>
    )
}

export default ContactList
