import * as Label from '@radix-ui/react-label'
import { styled } from '../../styles'

export const InfoContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: '$body',
})

export const InputLabel = styled(Label.Root, {
  color: '$white',

  variants: {
    size: {
      sm: {
        fontSize: '$xs',
      },
      md: {
        fontSize: '$md',
      },
    },
  },
})

export const ErrorMessage = styled('span', {
  color: '$red600',
})

export const InputField = styled('input', {
  border: 0,
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: '$input',
  borderRadius: '$md',
  backgroundColor: '$berry200',
  color: '$black',
  padding: '$2 $2 $2 $4',
  width: '100%',

  '&:focus': {
    backgroundColor: '$berry50',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$zinc600',
  },

  variants: {
    hasError: {
      false: {
        border: '1px solid transparent',
      },
      true: {
        border: '1px solid $red600',
      },
    },

    size: {
      sm: {
        fontSize: '$xs',
      },
      md: {
        fontSize: '$md',
      },
    },
  },

  defaultVariants: {
    hasError: 'false',
    size: 'md',
  },
})
