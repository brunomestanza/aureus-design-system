import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$md',
  fontSize: '$md',
  fontWeight: '$bold',
  fontFamily: '$body',
  textAlign: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  transition: 'all 0.5s',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        border: '2px solid $white',

        '&:not(:disabled):hover': {
          boxShadow: '0px 0px 10px 4px rgba(255, 255, 255, 0.5)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },

        '&:disabled': {
          color: '$zinc500',
          border: '2px solid $zinc500',
        },
      },

      secondary: {
        backgroundColor: '$violet300',
        color: '$black',

        '&:not(:disabled):hover': {
          backgroundColor: '$violet400',
        },

        '&:disabled': {
          backgroundColor: '$zinc500',
          color: '$zinc800',
        },
      },

      tertiary: {
        color: '$white',
        fontFamily: '$body',

        '&:hover': {
          cursor: 'pointer',
          textDecoration: 'underline',
        },
      },
    },

    size: {
      xs: {
        padding: '0px',
      },
      sm: {
        padding: '$2 $6',
        width: 'fit-content',
      },
      md: {
        padding: '$2 $6',
        minWidth: 220,
      },
      lg: {
        padding: '$4 $6',
        minWidth: 220,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
