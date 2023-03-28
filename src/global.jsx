import styled, { createGlobalStyle } from 'styled-components';

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
        --font-text: 1.6rem;
        --font-medium: 1.8rem;
        --font-big: 2rem;
        --font-logo: 3.4rem;
        --icons-size: 3.2rem;
        --main-color: #190e02; //black
        --main-shade: #8c8680; //tint-black
        --secondary-color: #e27c12; //orange
        --secondary-shade: #fafaf7; //gray
        --main-white: #fff3e8; //white
        --space-small: 1.5rem;
        --space-medium: 3rem;
        --space-big: 10rem;
    }

    h1,
    h2, 
    h3 {
      text-transform: uppercase;
      letter-spacing: -1px;
    } 

    input {
      outline: none;
    }

    p {
      font-size: var(--font-text);
    }

    select {
           border: none;
           outline: none;
           background-color: var(--main-white);
           border-bottom: 1px solid var(--main-color);
        } 
`;

export const StyledFlex = styled.div`
  display: flex;
  gap: var(--space-medium);
  padding: var(--space-small);
  align-items: center;

  @media (max-width: 600px) {
    gap: var(--space-small);
  }
`;

const StyledInputWrapper = styled.div`
  padding: 1rem;

  input {
    width: 100%;
    height: 4rem;
    background-color: var(--secondary-shade);
    padding: 0.5rem;
    margin: 1rem 0;
    border: 1px solid var(--main-shade);
    opacity: 0.7;
  }

  input:hover,
  input:active {
    border-color: var(--main-color);
  }

  span {
    color: var(--secondary-color);
  }
`;

export function InputWrapper({ children }) {
  return <StyledInputWrapper>{children}</StyledInputWrapper>;
}

export const StyledBtn = styled.button`
  padding: var(--space-small) var(--space-medium);
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;
  border: none;
  z-index: 98;
  transition: all 0.2s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.2s ease-in-out;
  }

  &::before {
    z-index: -1;
    opacity: 0.9;
  }

  &::after {
    transform: translate(-50%) skew(20deg) scaleX(1);
    transition: width 0.36s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
`;

export const allRegex = {
  emailRegex: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
  passwordRegex: /^(?=.*\d).{4,10}$/,
  confirmPasswordRegex: /^(?=.*\d).{4,10}$/,
  surNameRegex: /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/,
};

export function shuffle(array) {
  const newArr = array;
  let currentIndex = newArr.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [newArr[currentIndex], newArr[randomIndex]] = [
      newArr[randomIndex],
      newArr[currentIndex],
    ];
  }

  return newArr;
}

export function isSmallScreen() {
  const mediaQuery = window.matchMedia('(max-width: 600px)');
  if (mediaQuery.matches) {
    return true;
  }
  return false;
}
