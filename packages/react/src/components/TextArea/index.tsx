import { ComponentProps, ElementType } from 'react'
import { InputLabel, TextAreaInput } from './styles'

export interface TextAreaProps extends ComponentProps<typeof TextAreaInput> {
  as?: ElementType
  label: string
}

export function TextArea({ label, id, ...props }: TextAreaProps) {
  return (
    <>
      <InputLabel size={props.size} htmlFor={id}>
        {label}
      </InputLabel>
      <TextAreaInput id={id} {...props} />
    </>
  )
}
