import { InputWrapper, StyledBtnLogin } from "../../../global";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../../api/api";
import { StyledForm, StyledContainerBtn } from "../styles.js";

export function LoginForm(){
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    });

    function handleChange(e){
        setFormLogin({...formLogin, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e){
        e.preventDefault();
        console.log(formLogin);
        try {
            const res = await api.post("/user/login", formLogin);
            console.log(res);
        } catch (err){
            console.log(err);
        }
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