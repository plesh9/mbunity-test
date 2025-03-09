import Image from 'next/image'
import type { FC } from 'react'
import ELLIPSE_LG from '../../../../_assets/ellipse-lg.png'
import ELLIPSE_XL from '../../../../_assets/ellipse-xl.png'

const Ellipses: FC = () => {
    return (
        <>
            <Image
                src={ELLIPSE_XL}
                width={269}
                height={269}
                className={`
                  pointer-events-none absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 select-none object-cover
                  max-md:size-[192px]
                  md:translate-x-1/4 md:translate-y-1/4
                `}
                alt=''
            />
            <Image
                src={ELLIPSE_LG}
                width={138}
                height={138}
                className={`
                  pointer-events-none absolute bottom-0 right-0 -translate-x-1/2 translate-y-[-70%] select-none object-cover
                  max-md:size-[54px]
                  md:-translate-y-1/2
                `}
                alt=''
            />
        </>
    )
}

export default Ellipses
