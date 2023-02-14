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

export function InputContainerForm(props){
  const StyledContainerInput = styled.div`
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

  return (
      <StyledContainerInput label={props.label}>
          <label>{props.label}:</label>
          <input></input>
          <span>Please use a valid email address, such as user@example.com.</span>
      </StyledContainerInput>
  )
}

export const StyledBtnLogin = styled.button`
  padding: var(--space-small);
  cursor: pointer;
`

// export function StyledTitle(props){
  
//   const StyledTitle = styled.h1`
//     text-transform: uppercase;
//     font-weight: 800;
//     letter-spacing: -1px;
//     font-size: ${props.fontSize};
//   `

//   return (
//     <StyledTitle fontSize={props.fontSize}>
//     </StyledTitle>
//   )
// }

