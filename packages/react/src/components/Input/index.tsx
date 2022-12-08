import { ComponentProps } from 'react'
import { ErrorMessage, InfoContainer, InputField, InputLabel } from './styles'

export interface InputProps extends ComponentProps<typeof InputField> {
  label: string
  errorMessage?: string
}

export function Input({ label, errorMessage, id, ...props }: InputProps) {
  return (
    <div>
      <InfoContainer>
        <InputLabel size={props.size} htmlFor={id}>
          {label}
        </InputLabel>
        {props.hasError === true && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </InfoContainer>
      <InputField id={id} {...props} />
    </div>
  )
}

Input.displayName = 'Input'
