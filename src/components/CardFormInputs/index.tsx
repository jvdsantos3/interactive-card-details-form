import InputMask from 'react-input-mask'
import { useFormContext } from 'react-hook-form'

import { FormInput, FormInputInline, FormInputsContainer } from './styles'

export function CardFormInputs() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormInputsContainer>
      <FormInput $wrong={errors.name?.type === 'too_small'}>
        <label htmlFor="name">Cardholder Name</label>
        <input
          type="text"
          id="name"
          placeholder="e.g. Jane Appleseed"
          maxLength={25}
          {...register('name')}
        />
        {errors.name?.type === 'too_small' && (
          <p role="alert">Invalid Cardholder Name!</p>
        )}
      </FormInput>

      <FormInput
        $wrong={
          errors.number?.type === 'custom' ||
          errors.number?.type === 'too_small'
        }
      >
        <label htmlFor="number">Card Number</label>
        <InputMask
          mask="9999 9999 9999 9999"
          id="number"
          placeholder="e.g. 1234 5678 9123 0000"
          {...register('number')}
        />
        {(errors.number?.type === 'custom' ||
          errors.number?.type === 'too_small') && (
          <p role="alert">Invalid Card Number!</p>
        )}
      </FormInput>

      <FormInputInline>
        <FormInput
          $wrong={
            errors.mounth?.type === 'too_small' ||
            errors.year?.type === 'too_small' ||
            errors.mounth?.type === 'invalid_type' ||
            errors.year?.type === 'invalid_type'
          }
        >
          <label htmlFor="date">Exp. Date (MM/YY)</label>

          <div>
            <InputMask
              mask="99"
              id="date"
              placeholder="MM"
              max={31}
              {...register('mounth', {
                valueAsNumber: true,
              })}
            />
            <InputMask
              mask="99"
              id="date"
              placeholder="YY"
              max={99}
              {...register('year', {
                valueAsNumber: true,
              })}
            />
          </div>
          {(errors.mounth?.type === 'too_small' ||
            errors.year?.type === 'too_small') && (
            <p role="alert">Invalid Date!</p>
          )}

          {(errors.mounth?.type === 'invalid_type' ||
            errors.year?.type === 'invalid_type') && (
            <p role="alert">Invalid Date!</p>
          )}
        </FormInput>

        <FormInput $wrong={errors.cvc?.type === 'too_small'}>
          <label htmlFor="cvc">CVC</label>
          <InputMask
            mask="999"
            id="cvc"
            placeholder="e.g. 123"
            {...register('cvc')}
          />
          {errors.cvc?.type === 'too_small' && <p role="alert">Invalid CVC!</p>}
        </FormInput>
      </FormInputInline>
    </FormInputsContainer>
  )
}
