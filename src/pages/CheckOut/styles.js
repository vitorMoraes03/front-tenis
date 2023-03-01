import styled from "styled-components";
import { StyledLoginContainer } from "../Login/LoginContainer";
import { StyledBtnLogin } from "../Login/styles";

export const StyledCheckOutBackground = styled(StyledLoginContainer)``;

export const StyledCheckOutContainer = styled.div`
    width: 60%;
    background-color: var(--secondary-shade);
    padding: var(--space-small);

    img {
        width: 30%;
    }

    h2 {
        text-transform: none;
    }

    p {
        font-size: var(--font-medium);
        font-weight: 500;
    }
`

export const StyledCheckOutTitle = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--main-color); 
    align-items: center;
    padding-bottom: 1rem;
`

export const StyledCheckOutMain = styled.div`
    padding: var(--space-small) 0;

    h3 {
        margin-bottom: var(--space-small);
        text-transform: none;
    }
`

export const StyledCheckOutCards = styled.div`
    border-bottom: 1px solid var(--main-color);

`

export const StyledCheckOutPrice = styled.div`
    .total-price > p {
        font-weight: 800;
    }

    div {
        margin: var(--space-small);
        display: flex;
        justify-content: space-between;
    }
`

export const StyledBtnSmall = styled(StyledBtnLogin)`
    padding: 0.7rem 1rem;
    
`

export const StyledBtnsCheckout = styled.div`
    //temporary, just for testing purpose:
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding: 2rem;
`