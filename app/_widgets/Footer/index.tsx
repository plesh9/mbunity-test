import type { FC } from 'react'
import Container from '@shared/ui/Container'
import LineHorizontal from '@shared/ui/LineHorizontal'
import Logo from '@shared/ui/Logo'
import InfoList from './ui/InfoList'
import JoinOurNewsletter from './ui/JoinOurNewsletter'
import ReachUsList from './ui/ReachUsList'

const Footer: FC = () => {
    return (
        <div
            className={`
              pt-8
              xl:pt-[50px]
            `}
        >
            <div
                className={`
                  bg-black pb-9 pt-5 text-white
                  xl:p-20 xl:pb-[60px]
                `}
            >
                <Container className='max-w-[1340px]'>
                    <Logo className='self-center text-4xl' />
                    <LineHorizontal className='bg-white' />
                    <div
                        className={`
                          flex flex-wrap gap-10
                          md:gap-14
                        `}
                    >
                        <ReachUsList />
                        <InfoList />
                        <JoinOurNewsletter />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Footer
