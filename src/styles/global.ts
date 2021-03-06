import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: '#fff';
    color: '#363636';
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    outline: 0;
    font: 16px "Roboto", serif;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  button {
    border: 0;
    outline: 0;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  /* NProgress */
  #nprogress .bar {
    background: red !important;
  }
`;

export default GlobalStyle;
