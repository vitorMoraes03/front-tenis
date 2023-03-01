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
`

export const StyledGridShop = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--space-medium);
    padding-top: var(--space-big); //double check

    img {
        width: 100%;
        border-radius: 2px;
    }
`