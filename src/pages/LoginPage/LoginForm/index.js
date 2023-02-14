import styled from "styled-components";
import { InputWrapper, StyledBtnLogin } from "../../../global";
import { Link } from "react-router-dom";
import { useState } from "react";

const StyledForm = styled.form`
    width: 50%;
    //padding: 6rem var(--space-medium);   
`
const StyledContainerBtn = styled.div`
    display: flex;
    justify-content: center;
    gap: var(--space-small);
    align-items: center;
    margin-top: var(--space-small);
`

export function LoginForm(){
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    });

    function handleChange(e){
        setFormLogin({...formLogin, [e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formLogin);
    }

    return (
        <StyledForm>
            <InputWrapper>
                    <label htmlFor="inputEmail">Endereço de Email:</label>
                    <input
                    id="inputEmail"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={formLogin.email}
                    required
                    />
                    <span>Please use a valid email address, such as user@example.com.</span>
            </InputWrapper>
            <InputWrapper>
                    <label>Password:</label>
                    <input
                    id="inputPassword"
                    type="text"
                    name="password"
                    onChange={handleChange}
                    value={formLogin.password}
                    required/>
                    <span>You must enter a password.</span>
            </InputWrapper>
            <StyledContainerBtn>
                <StyledBtnLogin 
                type="submit"
                onClick={handleSubmit}>
                Login
                </StyledBtnLogin>
                <Link to="">Esqueceu seu password?</Link>
            </StyledContainerBtn>
        </StyledForm>
    )
}