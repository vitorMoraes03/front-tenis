import styled from "styled-components";
import { StyledBtn } from "../../global";

export const StyledForm = styled.form`
    width: 50%;
    //padding: 6rem var(--space-medium);   
`
export const StyledContainerBtn = styled.div`
    display: flex;
    justify-content: center;
    gap: var(--space-small);
    align-items: center;
    margin-top: var(--space-small);
`

export const StyledBtnLogin = styled(StyledBtn)`
    color: var(--main-white);

    &::before {
    background-color: var(--main-color);
    }

    &::after{
    background-color: #2e1a04;
    }
`