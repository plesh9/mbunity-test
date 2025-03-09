import Link from 'next/link'
import type { FC, ReactNode } from 'react'

export interface InfoBlockType {
    title: ReactNode
    list: Array<{
        href: string
        title: ReactNode
    }>
}

const InfoBlock: FC<InfoBlockType> = ({ title, list }) => {
    return (
        <div className='flex grow flex-col gap-5'>
            <h3
                className={`
                  text-[16px] font-semibold
                  md:text-lg
                `}
            >
                {title}
            </h3>
            {list.map((item, index) => (
                <Link href={item.href} target='_blank' rel='noreferrer' className='hover:underline' key={index}>
                    {item.title}
                </Link>
            ))}
        </div>
    )
}

export default InfoBlock
