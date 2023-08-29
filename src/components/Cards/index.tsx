import {
  CardBackContainer,
  CardFrontContainer,
  CardFrontContent,
  CardsContainer,
} from './styles'

import cardLogo from '../../assets/card-logo.svg'

interface CardsProps {
  name: string
  number: string
  mounth: number
  year: number
  cvc: string
}

export function Cards({ name, number, mounth, year, cvc }: CardsProps) {
  return (
    <CardsContainer>
      <CardBackContainer>
        <span>{cvc || '000'}</span>
      </CardBackContainer>

      <CardFrontContainer>
        <img src={cardLogo} alt="Card's Logo" />

        <CardFrontContent>
          <p>{number || '0000 0000 0000 0000'}</p>

          <div>
            {name || 'felicia leire'}{' '}
            <span>
              {mounth || '00'}/{year || '00'}
            </span>
          </div>
        </CardFrontContent>
      </CardFrontContainer>
    </CardsContainer>
  )
}
