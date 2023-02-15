import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    //border: 1px solid red;
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
        
        --main-color: #190e02; //black
        --main-shade: #8c8680; //tint-black
        --secondary-color: #e27c12; //orange
        --secondary-shade: #fafaf7; //gray
        --main-white: #fff3e8; //white

        --space-small: 1.5rem;
        --space-medium: 4rem;
        --space-big: 10rem;
    }

    h1,
    h2, 
    h3 {
      text-transform: uppercase;
      letter-spacing: -1px;
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

// Default Const Styles

export const StyledFlex = styled.div`
  display: flex;
  gap: var(--space-medium);
  padding: var(--space-small);
  align-items: center;
`

const StyledInputWrapper = styled.div`
padding: var(--space-small);

input {
  width: 100%; 
  height: 4rem; 
  background-color: var(--secondary-shade);
  padding: 0.5rem;
  margin: 1rem 0;   
  border: 1px solid var(--main-shade);
}

input:hover,
input:active {
  border-color: var(--main-color);
}

span {
  color: var(--secondary-color);
}
`

export const InputWrapper = ({ children }) => {
  return (
      <StyledInputWrapper>
        {children}
      </StyledInputWrapper>
  )
}

export const StyledBtnLogin = styled.button`
  padding: var(--space-small) var(--space-medium);
  text-transform: uppercase;
  cursor: pointer;
  color: var(--main-white);
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;
  border: none;
  z-index: 98;
  transition: all 0.2s ease;
  //white-space: nowrap;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.2s ease-in-out;
  }

  &::before{
    background-color: var(--main-color);
    z-index: -1;
    opacity: 0.9;
  }

  &::after{
    background-color: #2e1a04;
    transform: translate(-50%) skew(20deg) scaleX(1);
    transition: width .36s cubic-bezier(.175, .885, .32, 1.275);
    z-index: -2;
    left: 50%;
    width: 2rem;
    //height: 100%;
    //top: 0;
  }

  &:hover::after {
    width: 120%;
  }

  &:hover::before, 
  &:hover::after {
    opacity: 1;
  }
`


