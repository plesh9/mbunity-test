import Link from 'next/link'
import type { FC } from 'react'
import Icon from '@shared/ui/Icon'
import REACH_US_LIST from '@widgets/Footer/const/reach-us-list'

const ReachUsList: FC = () => {
    return (
        <div className={'flex grow flex-col gap-5'}>
            <h3
                className={`
                  text-[16px] font-semibold
                  md:text-lg
                `}
            >
                Reach us
            </h3>
            <div
                className={`
                  flex max-w-[143px] flex-col gap-6
                  lg:max-w-[331px]
                `}
            >
                {REACH_US_LIST.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        target='_blank'
                        rel='noreferrer'
                        className={`
                          flex w-fit items-center gap-3 duration-300
                          hover:opacity-70
                          max-md:flex-col
                          lg:gap-6
                        `}
                    >
                        <Icon className='self-start' name={item.icon} size={6} />
                        <span>{item.title}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ReachUsList
