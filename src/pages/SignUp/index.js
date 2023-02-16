import { StyledSignUpContainer } from "./styles";
import { InputWrapper, StyledBtnLogin } from "../../global";
import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

// Onde essa funcoes SMALL E SPAN vao ficar?
// Levar em conta quando o SPAN é ativado...

function Small(){
    return (
        <small>
            Obrigatório
        </small>
    )
}

function Span(){
    return (
        <span>
            Preencher campo corretamente.
        </span>
    )
}

export function SignUp(props){
    const navigate = useNavigate();

    const [formSignUp, setFormSignUp] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        birthday: '',
    });

    function handleChange(e){
        setFormSignUp({...formSignUp, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const res = await api.post("/user/signup", formSignUp);
            console.log(res.data);
            navigate('/');
        } catch (err){
            console.log(err);
        }
    }

    return (
        <StyledSignUpContainer>
            <h1>Cadastro</h1>
            <form>
            <InputWrapper>
                <label htmlFor="inputUserName">
                Nome de usuário
                <Small/>
                </label>
                <input
                id="inputUserName"
                type="text"
                name="userName"
                onChange={handleChange}
                value={formSignUp.userName}
                required              
                />
                <Span/>
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="inputEmail">
                Email
                <Small/>
                </label>
                <input
                id="inputEmail"
                type="text"
                name="email"
                onChange={handleChange}
                value={formSignUp.email}
                required              
                />
                <Span/>
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="inputPassword">
                Senha
                <Small/>
                </label>
                <input
                id="inputPassword"
                type="text"
                name="password"
                onChange={handleChange}
                value={formSignUp.password}
                required              
                />
                <Span/>
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="inputConfirmPassword">
                Confirmar senha
                <Small/>
                </label>
                <input
                id="inputConfirmPassword"
                type="text"
                name="confirmPassword"
                onChange={handleChange}
                value={formSignUp.confirmPassword}
                required              
                />
                <Span/>
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="inputFirstName">
                Primeiro nome
                <Small/>
                </label>
                <input
                id="inputFirstName"
                type="text"
                name="firstName"
                onChange={handleChange}
                value={formSignUp.firstName}
                required              
                />
                <Span/>
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="inputLastName">
                Sobrenome
                <Small/>
                </label>
                <input
                id="inputLastName"
                type="text"
                name="lastName"
                onChange={handleChange}
                value={formSignUp.lastName}
                required              
                />
                <Span/>
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="inputBirthday">
                Data de nascimento
                <Small/>
                </label>
                <input
                id="inputBirthday"
                type="text"
                name="birthday"
                onChange={handleChange}
                value={formSignUp.birthday}
                required              
                />
                <Span/> 
            </InputWrapper>
            <StyledBtnLogin onClick={handleSubmit}>Criar Conta</StyledBtnLogin>
            </form>
        </StyledSignUpContainer>
    )
}

