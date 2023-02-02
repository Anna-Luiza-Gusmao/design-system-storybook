import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '$4 $4',

  cursor: 'pointer',

  color: '$white',
  background: '$ignite500',

  '&:hover': {
    background: '$ignite300',
  },
})

export const ToastContainer = styled(Toast.Root, {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '$16',
  background: '$gray800',
  border: '1px solid $gray600',
  padding: '$3 $5',
  borderRadius: 6
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$8',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const ToastTitle = styled(Toast.Title, {
    color: '$white',
    fontFamily: '$default',
    fontWeight: '$bold',
    lineHeight: '$base',
    fontSize: '$5'
})

export const ToastDescription = styled(Toast.Description, {
    color: '$gray200',
    fontFamily: '$default',
    fontWeight: '$regular',
    lineHeight: '$base',
    fontSize: '0.875rem',

    margin: 0
})

export const ToastAction = styled(Toast.Action, {
    gridArea: 'action',
})

export const CloseButton = styled('button', {
    all: 'unset',
    display: 'inline-flex',
    justifyContent: 'flex-end'
})