import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@alissonmacedo/react'

export default {
  title: 'Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Testando</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

export const Big: StoryObj<BoxProps> = {}
