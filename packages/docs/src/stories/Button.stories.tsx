import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@alissonmacedo/react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Example Button',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const CustomTag: StoryObj<ButtonProps> = {}
