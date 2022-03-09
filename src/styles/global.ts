import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root, .App {
    height: 100vh;
  }

  body {
    background: #FFF;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .ContentPage {
    height: auto;
    display: flex;
    align-items: stretch;
    padding: 16px
  }
`;

export const Container = styled.div`
  width: 75%;
  height: auto;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  margin: auto;

  background: #f7f7f7;
  box-shadow: 0px 0px 16px rgb(0 0 0 / 20%);

  @media (max-width: 600px) {
    width: 100%;
  }
`;
