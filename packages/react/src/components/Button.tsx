import { styled } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'

export const Button = styled('button', {})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
