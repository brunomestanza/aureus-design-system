import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@aureus/react'

// Funcina como global para todas as variantes
export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Example title',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        component: 'You can use the "as" param, for change the HTMl tag'
      }
    }
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
