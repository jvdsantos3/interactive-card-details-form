import { Cards } from '../../components/Cards'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CardFormInputs } from '../../components/CardFormInputs'
import { useState } from 'react'

import {
  Button,
  FormContainer,
  FormContent,
  HomeContainer,
  HomeContent,
  SuccessContainer,
} from './styles'

import CompleteIcon from '../../assets/icon-complete.svg'

const CardFormValidationSchema = zod.object({
  name: zod.string().min(1, 'Invalid Name!').max(25, 'Invalid Name!'),
  number: zod
    .string()
    .min(19, 'Invalid Number!')
    .max(19, 'Invalid Number!')
    .refine(
      (val) => val.replaceAll('_', '').replaceAll(' ', '').length === 16,
      {
        message: 'Invalid Number!',
      },
    ),
  mounth: zod.number().min(1, 'Invalid Mounth!').max(31, 'Invalid Mounth!'),
  year: zod.number().min(24, 'Invalid Year!').max(99, 'Invalid Year!'),
  cvc: zod.string().min(3, 'Invalid CVC!').max(3, 'Invalid CVC!'),
})

export type CardFormData = zod.infer<typeof CardFormValidationSchema>

export function Home() {
  const [isSubmited, setIsSubmited] = useState(false)

  const CardHookForm = useForm<CardFormData>({
    resolver: zodResolver(CardFormValidationSchema),
    defaultValues: {
      name: '',
      number: '',
      cvc: '',
    },
  })

  const { handleSubmit, watch, reset } = CardHookForm

  const name = watch('name')
  const number = watch('number')
  const mounth = watch('mounth')
  const year = watch('year')
  const cvc = watch('cvc')

  const handleSubmitForm = () => {
    setIsSubmited(true)
  }

  const handleContinue = () => {
    setIsSubmited(false)
    reset()
  }

  return (
    <HomeContainer>
      <HomeContent>
        <Cards
          name={name}
          number={number}
          mounth={mounth}
          year={year}
          cvc={cvc}
        />
        {isSubmited ? (
          <SuccessContainer>
            <img src={CompleteIcon} alt="" />

            <div>
              <h2>THANK YOU!</h2>
              <p>We’ve added your card details</p>
            </div>

            <Button onClick={handleContinue}>Continue</Button>
          </SuccessContainer>
        ) : (
          <FormContainer>
            <FormContent onSubmit={handleSubmit(handleSubmitForm)}>
              <FormProvider {...CardHookForm}>
                <CardFormInputs />
              </FormProvider>
              <Button>Confirm</Button>
            </FormContent>
          </FormContainer>
        )}
      </HomeContent>
    </HomeContainer>
  )
}
