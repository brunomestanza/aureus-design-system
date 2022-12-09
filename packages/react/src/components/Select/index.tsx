import { ComponentProps, ElementType } from 'react'
import {} from './index'
import {
  SelectButton,
  SelectContainer,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemText,
  SelectPortal,
  SelectValue,
  SelectViewport,
} from './styles'

export function Select() {
  return (
    <SelectContainer>
      <SelectButton>
        <SelectValue placeholder="Teste" />
        <SelectIcon />
      </SelectButton>

      <SelectPortal>
        <SelectContent>
          <SelectViewport>
            <SelectItem value="item">
              <SelectItemText>Item</SelectItemText>
            </SelectItem>
            <SelectItem value="morango">
              <SelectItemText>Morango</SelectItemText>o
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectContainer>
  )
}

export interface SelectProps extends ComponentProps<typeof SelectItem> {
  as?: ElementType
}

Select.displayName = 'Select'
