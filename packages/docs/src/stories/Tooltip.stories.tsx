import { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@anna-ignite-ui-dev/react'

export default {
  title: 'Information/Tooltip',
  component: Tooltip,
  args: {
    day: 27,
    month: 'Outubro',
    availability: true,
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '4rem',
          }}
        >
          {Story()}
        </div>
      )
    },
  ],
  argTypes: {
    availability: {
      control: 'boolean',
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
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
