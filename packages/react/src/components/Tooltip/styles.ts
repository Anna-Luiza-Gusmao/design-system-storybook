import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipItem = styled('button', {
    all: 'unset',
    padding: '$4 1.625rem',
    background: '$gray800',
    border: 0,
    borderRadius: '$sm',

    color: '$white',
    fontFamily: '$default',
    fontWeight: '$regular',
    fontSize: '$md',

    '&:hover': {
        cursor: 'pointer'
    }
})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
    fontFamily: '$tooltip',
    lineHeight: '$short',
    fontSize: '$sm',
    color: '$gray100',

    borderRadius: '$sm',
    padding: '$3 $4',
    backgroundColor: '$gray900',
    userSelect: 'none',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
    fill: '$gray900',
})