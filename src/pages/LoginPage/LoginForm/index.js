import styled from "styled-components";
import { InputContainerForm, StyledBtnLogin } from "../../../global";
import { Link } from "react-router-dom";

export function LoginForm(){
    const StyledForm = styled.form`
        width: 50%;
        //padding: 6rem var(--space-medium);   
`
    const StyledContainerBtn = styled.div`
        display: flex;
        justify-content: center;
        gap: var(--space-small);
        align-items: center;
    `



    return (
        <StyledForm>
            <InputContainerForm label={"Endereço de Email"}/>
            <InputContainerForm label={"Password"}/>
            <StyledContainerBtn>
                <StyledBtnLogin>Login</StyledBtnLogin>
                <Link to="">Esqueceu seu password?</Link>
            </StyledContainerBtn>
        </StyledForm>
    )
}