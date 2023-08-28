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
        <span>{cvc}</span>
      </CardBackContainer>

      <CardFrontContainer>
        <img src={cardLogo} alt="Card's Logo" />

        <CardFrontContent>
          <p>{number}</p>

          <div>
            {name}{' '}
            <span>
              {isNaN(mounth) ? '00' : mounth}/{isNaN(year) ? '00' : year}
            </span>
          </div>
        </CardFrontContent>
      </CardFrontContainer>
    </CardsContainer>
  )
}
