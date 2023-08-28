import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
  }

  body, input, textarea, button {
    font: 500 1.6rem 'Space Grotesk', sans-serif;
  }

  button {
    cursor: pointer;
  }
`
