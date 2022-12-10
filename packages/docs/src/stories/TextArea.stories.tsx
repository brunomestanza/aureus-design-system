import type { StoryObj, Meta } from '@storybook/react'
import { TextArea, TextAreaProps } from '@ordo-aureus/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {
    disabled: false,
    label: 'Example label',
    placeholder: 'Example placeholder',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'This component has an "id" property from input, that **HAS** to be passed for a11y.'
      }
    }
  }
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}
