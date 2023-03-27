import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@alissonmacedo/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Example text',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
