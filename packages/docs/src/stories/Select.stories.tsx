import type { StoryObj, Meta } from '@storybook/react'
import { Select, SelectProps } from '@ordo-aureus/react'

export default {
  title: 'Form/Select',
  component: Select,
  args: {
  },
  argTypes: {
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{ display: 'flex', width: '80%' }}
        >
          {Story()}
        </div>
      )
    },
  ],
} as Meta<SelectProps>

export const Primary: StoryObj<SelectProps> = {}
