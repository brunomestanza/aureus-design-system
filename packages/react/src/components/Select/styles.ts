import * as Select from '@radix-ui/react-select'
import { styled } from '../../styles'

export const SelectContainer = styled(Select.Root, {})

export const SelectButton = styled(Select.Trigger, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '$md',
  padding: '$2 $2 $2 $4',
  fontSize: '$md',
  backgroundColor: '$berry200',
  color: '$black',
  width: '100%',
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&[data-placeholder]': { color: '$black' },
})

export const SelectValue = styled(Select.Value, {})

export const SelectIcon = styled(Select.Icon, {})

export const SelectPortal = styled(Select.Portal, {})

export const SelectContent = styled(Select.Content, {
  overflow: 'hidden',
  backgroundColor: '$berry200',
  borderRadius: 6,
})

export const SelectViewport = styled(Select.Viewport, {
  padding: '$3',
})

export const SelectItem = styled(Select.Item, {
  fontSize: '$md',
  color: '$black',
  borderRadius: '$xs',
  display: 'flex',
  alignItems: 'center',
  height: '$6',
  padding: '0 35px 0 25px',
})

export const SelectItemText = styled(Select.ItemText, {})
