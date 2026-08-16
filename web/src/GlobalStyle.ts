import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.sans};
    color: ${({ theme }) => theme.ink};
    background: ${({ theme }) => theme.cream};
  }

  #root {
    min-height: 100svh;
  }
`;
