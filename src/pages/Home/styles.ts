import { styled } from 'styled-components'

import bgMainMobile from '../../assets/bg-main-mobile.png'
import bgMainDesktop from '../../assets/bg-main-desktop.png'

export const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: url(${bgMainMobile}) no-repeat;
  background-size: 100% 24rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    background: url(${bgMainDesktop}) no-repeat;
    background-size: 48.3rem 100%;
  }
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 12.7rem;
  }
`

export const FormContainer = styled.section`
  max-width: 32.7rem;

  @media (min-width: 1024px) {
    max-width: 38.1rem;
  }
`

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const SuccessContainer = styled.section`
  width: 32.7rem;
  margin: 0 0 8.2rem;
  text-align: center;

  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors['deep-violet']};

  img {
    width: 8rem;
    height: 8rem;
    align-self: center;
  }

  > div {
    margin: 3.5rem 0 4.8rem;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    h2 {
      font-size: 2.8rem;
      letter-spacing: 0.3422rem;
    }

    p {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors['purplish-gray']};
    }
  }

  @media (min-width: 1024px) {
    width: 38.1rem;
  }
`

export const Button = styled.button`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors['deep-violet']};
  border: 0;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;

  &:hover {
    background: linear-gradient(
      ${({ theme }) => theme.colors['gradient-1']},
      ${({ theme }) => theme.colors['gradient-2']}
    );
  }
`
