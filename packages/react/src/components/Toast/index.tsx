import { ToastProvider } from '@radix-ui/react-toast'
import {
  Button,
  ToastContainer,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastAction,
  CloseButton,
} from './styles'
import { useState } from 'react'
import { X } from 'phosphor-react'

export interface ToastProps {
  dayOfTheWeek: string
  day: number
  month: string
  hour: string
}

export function Toast({ dayOfTheWeek, day, month, hour }: ToastProps) {
  const [open, setOpen] = useState(false)

  return (
    <ToastProvider swipeDirection="right">
      <Button
        onClick={() => {
          setOpen(!open)
        }}
      >
        Open Toast
      </Button>

      <ToastContainer open={open} onOpenChange={setOpen}>
        <div>
          <ToastTitle>Agendamento realizado</ToastTitle>
          <ToastDescription asChild>
            <p>
              {dayOfTheWeek}, {day} de {month} às {hour}h
            </p>
          </ToastDescription>
        </div>

        <ToastAction asChild altText="Agendamento Realizado">
          <CloseButton>
            <X size={24} color="#A9A9B2" style={{ cursor: 'pointer' }} />
          </CloseButton>
        </ToastAction>
      </ToastContainer>

      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
