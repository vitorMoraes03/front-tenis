import { StyledLoginContainer } from "../Login/LoginContainer";
import { StyledBtn } from "../../global";
import styled from "styled-components";

export const StyledBtnShop = styled(StyledBtn)`
    color: var(--main-white);

    &::before {
    background-color: var(--main-shade);
    }

    &::after{
    background-color: #2e1a04;
    }
`

export const StyledShopContainer = styled(StyledLoginContainer)`
`

export const StyledDivShop = styled.div`
        display: flex;
        gap: var(--space-small);
        justify-content: center;

        select {
           padding: var(--space-small);
           text-transform: uppercase;
        }     
`

export const StyledGridShop = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--space-medium);
    padding-top: var(--space-big); //double check


`

export const ShoeCard = styled.div`
    font-size: var(--font-big);
   

    img {
        width: 100%;
        border-radius: 2px;
    }

    div {
        //border: 1px solid red;
    }

    .shoe-card-infos {
        padding: var(--space-small);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .shoe-card-text {
        
    }

    select {
        padding: 1px;                   
    }   
  
`