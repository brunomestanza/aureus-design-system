import * as Label from '@radix-ui/react-label'
import { styled } from '../../styles'

export const TextAreaInput = styled('textarea', {
  border: 0,
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: '$input',
  borderRadius: '$md',
  backgroundColor: '$berry200',
  color: '$black',
  padding: '$2 $2 $2 $4',
  width: '100%',
  resize: 'vertical',

  '&:focus': {
    backgroundColor: '$berry100',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$zinc600',
  },

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
