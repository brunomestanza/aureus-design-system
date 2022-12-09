import type { StoryObj, Meta } from '@storybook/react'
import { Text, Checkbox, CheckboxProps } from '@aureus/react'

// Funcina como global para todas as variantes
export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  // Podemos passar um JSX para ter decoradores na documentação, o Story é o conteúdo do Story em si
  // assim podemos colocar uma div em volta dele por exemplo
  decorators: [
    (Story) => {
      return (
        <label
          style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </label>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
