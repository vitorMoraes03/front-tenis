import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    /* border: 1px solid red; */
  }

  html {
        font-size: 62.5%;
        font-family: 'Roboto', sans-serif;

        --font-text: 1rem;
        --font-medium: 1.5rem;
         
        --font-logo: 3.4rem;
        --icons-size: 3.2rem;
        

        --main-color: #190e02;
        --secondary-color: #e27c12;
        --main-shade: #4b2906;
        --secondary-shade: #fdb972;
        --main-white: #fff3e8;

        --space-small: 1.5rem;
        --space-medium: 4rem;
        --space-big: 14rem;
    }

    ion-icon:hover,
    ion-icon:active,
    a:hover,
    a:active {
        color: var(--secondary-shade);
    }

    a {
      text-decoration: none;
    }
`

export const StyledFlex = styled.div`
display: flex;
gap: var(--space-medium);
padding: var(--space-small);
align-items: center;
`