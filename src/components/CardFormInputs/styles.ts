import { styled } from 'styled-components'

export const FormInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`

interface FormInputProps {
  $wrong: boolean
}

export const FormInput = styled.div<FormInputProps>`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  color: ${({ theme }) => theme.colors['deep-violet']};

  label {
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  }

  input {
    width: 100%;
    padding: 1.1rem 1.6rem;
    background: transparent;
    border: 1px solid;
    border-color: ${({ theme, $wrong }) =>
      $wrong ? theme.colors.red : theme.colors['light-gray']};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors['deep-violet']};

    &:focus {
      outline: 0;
      border-color: ${({ theme, $wrong }) =>
        $wrong ? theme.colors.red : theme.colors['gradient-1']};
    }

    &::placeholder {
      opacity: 0.25;
    }
  }

  > div {
    display: flex;
    gap: 0.8rem;
  }

  p {
    color: ${({ theme }) => theme.colors.red};
    font-size: 1.2rem;
  }
`

export const FormInputInline = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.1rem;
`
