import { styled } from 'styled-components'

import bgCardBack from '../../assets/bg-card-back.png'
import bgCardFront from '../../assets/bg-card-front.png'

export const CardsContainer = styled.section`
  width: 34.3rem;

  display: flex;
  flex-direction: column;

  filter: drop-shadow(0px 39px 60px rgba(0, 0, 0, 0.14));

  @media (min-width: 1024px) {
    width: 54.1rem;
    gap: 3.7rem;
  }
`

export const CardBackContainer = styled.div`
  width: 28.6rem;
  height: 15.7rem;
  padding: 7.3rem 3.7rem;
  background: url(${bgCardBack}) no-repeat;
  background-size: cover;
  border-radius: 6px;

  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.9rem;
    letter-spacing: 0.1286rem;
    text-transform: uppercase;
  }

  @media (min-width: 1024px) {
    width: 44.7rem;
    height: 24.5rem;
    padding: 11.1rem 5.7rem 11.6rem;
    border-radius: 10px;
    order: 1;

    span {
      font-size: 1.4rem;
      letter-spacing: 0.2rem;
    }
  }
`

export const CardFrontContainer = styled.div`
  width: 28.6rem;
  height: 15.7rem;
  margin-top: -6.3rem;
  padding: 1.8rem 2rem;
  background: url(${bgCardFront}) no-repeat;
  background-size: cover;
  border-radius: 6px;

  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 5.4rem;
    height: 3rem;
  }

  @media (min-width: 1024px) {
    width: 44.7rem;
    height: 24.5rem;
    margin-top: 0;
    padding: 2.8rem 3.2rem 2.65rem;

    img {
      width: 8.4rem;
      height: 4.7rem;
    }
  }
`

export const CardFrontContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  color: ${({ theme }) => theme.colors.white};

  p {
    font-size: 1.8rem;
    letter-spacing: 0.22rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    letter-spacing: 0.1286rem;
    text-transform: uppercase;

    span {
      font-size: 0.9rem;
      letter-spacing: 0.1286rem;
      text-transform: uppercase;
    }
  }

  @media (min-width: 1024px) {
    gap: 2.55rem;

    p {
      font-size: 2.8rem;
      letter-spacing: 0.3422rem;
    }

    > div {
      font-size: 1.4rem;
      letter-spacing: 0.2rem;
      text-transform: uppercase;

      span {
        font-size: 1.4rem;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
      }
    }
  }
`
