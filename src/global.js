import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  html {
        font-size: 62.5%;
        font-family: 'Roboto', sans-serif;
        color: var(--main-white);

        --font-text: 1.4rem;
        --font-medium: 1.5rem;
        --font-big: 1.8rem;
        --font-logo: 3.4rem;
        --icons-size: 3.2rem;
        
        --main-color: #190e02;
        --secondary-color: #e27c12;
        --main-shade: #4b2906;
        --secondary-shade: #fdb972;
        --main-white: #fff3e8;

        --space-small: 1.5rem;
        --space-medium: 4rem;
        --space-big: 10rem;
    }

    ion-icon {
      font-size: var(--icons-size);
    }

    ion-icon:hover,
    ion-icon:active,
    a:hover,
    a:active {
        color: var(--secondary-shade);
    }

    a {
      text-decoration: none;
      color: var(--main-white);
    }

    input {
      outline: none;
    }

    p {
      font-size: var(--font-text);
    }
`

export const StyledFlex = styled.div`
display: flex;
gap: var(--space-medium);
padding: var(--space-small);
align-items: center;
`