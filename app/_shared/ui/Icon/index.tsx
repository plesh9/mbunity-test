import type { ComponentProps, FC } from 'react'
import { toPoint } from '@shared/const/design-system'
import type { IconType } from '@shared/const/icons'
import ICONS from '@shared/const/icons'

interface Props extends Omit<ComponentProps<'svg'>, 'name'> {
    name: IconType | null | undefined
    size?: number
}

const Icon: FC<Props> = ({ name, size, ...rest }) => {
    const Component: FC<ComponentProps<'svg'>> | undefined = ICONS[name!]

    if (!Component) {
        return null
    }

    const pointedSizes = size ? { width: toPoint(size), height: toPoint(size) } : {}

    return <Component {...rest} {...pointedSizes} />
}

export default Icon
