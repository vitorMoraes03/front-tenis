import styled from "styled-components";
import { LoginForm } from "../LoginPage/LoginForm";
import { LoginCreateAcc } from "../LoginPage/LoginCreateAcc";
import { StyledFlex } from "../../global";

export function LoginPage(){
    const StyledLoginContainer = styled.div`
    padding: var(--space-medium) 8rem;
    background-color: var(--main-white);
    color: var(--main-color);
    font-size: var(--font-medium);
    
    a {
        color: var(--main-color);
    }
    
    h1 {
        text-align: center;
        font-size: 6rem;
        font-weight: 800;
    }
`
    const StyledSmallContainer = styled(StyledFlex)`
        margin: var(--space-medium) 0;
    `

    return (
        <StyledLoginContainer>
            <h1>Login</h1>
            <StyledSmallContainer>
                <LoginForm></LoginForm>
                <LoginCreateAcc></LoginCreateAcc> 
            </StyledSmallContainer>
        </StyledLoginContainer>
    )
        
}