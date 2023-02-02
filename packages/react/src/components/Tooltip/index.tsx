import { TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipItem,
  TooltipPortal,
} from './styles'

export interface TooltipProps {
  day: number
  month: string
  availability: boolean
}

export function Tooltip({ day, month, availability }: TooltipProps) {
  const checkaAvailability = () => {
    if (availability === true) return 'Disponível'
    else return 'Indisponível'
  }

  return (
    <TooltipProvider>
      <TooltipContainer>
        <TooltipTrigger asChild>
          <TooltipItem>{day}</TooltipItem>
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent sideOffset={5}>
            {day} de {month} - {checkaAvailability()}
            <TooltipArrow />
          </TooltipContent>
          
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
