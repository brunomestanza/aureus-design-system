import type { StoryObj, Meta } from '@storybook/react'
import { Input, InputProps } from '@aureus/react'

export default {
  title: 'Form/Input',
  component: Input,
  args: {
    disabled: false,
    hasError: false,
    label: 'Example label',
    errorMessage: 'Example error message',
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
        component: 'This component has an "id" property from input, that **HAS** to be passed for a11y, and use the "as" param to change the HTML tag.'
      }
    }
  }
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {}

export const Disabled: StoryObj<InputProps> = {
  args: {
    disabled: true
  }
}

export const WithError: StoryObj<InputProps> = {
  args: {
    hasError: true
  }
}
