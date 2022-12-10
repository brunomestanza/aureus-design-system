import type { StoryObj, Meta } from '@storybook/react'
import { User } from 'phosphor-react'
import { Button, ButtonProps } from '@ordo-aureus/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Example Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'For default, is **HTML button** tag, for change this, you could use the "as" param.'
      }
    }
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create New',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Check now',
    size: 'xs'
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: (
      <>
        <User weight='bold' size={16} />
        Find User
      </>
    ),
    size: 'xs'
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
