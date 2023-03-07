import { StyledLoginContainer } from "../Login/LoginContainer";
import styled from "styled-components";
import { StyledBtn } from "../../global";

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
    padding-top: var(--space-big); 
`

export const StyledBtnShop = styled(StyledBtn)`
    color: var(--main-white);

    &::before {
    background-color: var(--main-shade);
    }

    &::after{
    background-color: #2e1a04;
    }
`
