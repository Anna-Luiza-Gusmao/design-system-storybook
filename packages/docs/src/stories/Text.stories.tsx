import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@anna-ignite-ui-dev/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Example Text',
    size: 'md'
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Example Text of Strong Tag',
    as: 'strong',
  },
}
