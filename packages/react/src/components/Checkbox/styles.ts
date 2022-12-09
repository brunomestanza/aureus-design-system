import * as Checkbox from '@radix-ui/react-checkbox'
import { styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset', // Remove todas as props CSS que o button tem como base
  width: '$6',
  height: '$6',
  // backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0, // O tamanho base do botão no HTML é definido pelo tamanho da linha, como não tem texto zeramos ele
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $white',

  // '&[data-state="checked"]': {
  //   backgroundColor: '$ignite300',
  // },

  '&:focus': {
    border: '2px solid $zinc100',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  // '&[data-state="checked"]': {
  //   animation: `${slideIn} 200ms ease-out`,
  // },

  // '&[data-state="unchecked"]': {
  //   animation: `${slideOut} 200ms ease-out`,
  // },
})
