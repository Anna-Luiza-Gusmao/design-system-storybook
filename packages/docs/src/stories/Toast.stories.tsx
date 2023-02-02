import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@anna-ignite-ui-dev/react'

export default {
  title: 'Information/Toast',
  component: Toast,
  args: {
    dayOfTheWeek: 'Quarta-feira',
    day: 23,
    month: 'Outubro',
    hour: '16',
  },
  argTypes: {
    dayOfTheWeek: {
      options: [
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-Feira',
        'Sexta-feira',
        'Sábado',
        'Domigo',
      ],
      control: {
        type: 'inline-radio',
      }
    },
    day: {
      control: {
        type: 'number',
        min: 1,
        max: 31,
        step: 1,
      },
    },
    month: {
      options: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
