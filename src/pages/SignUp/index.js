import { StyledSignUpContainer } from "./styles";
import { InputWrapper, StyledBtnLogin } from "../../global";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

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
    const form = props.form;
    const setForm = props.setForm;
    const { setLoggedInUser } = useContext(AuthContext);

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const res = await api.post("/user/signup", form);
            setLoggedInUser({ ...res.data }); 
            localStorage.setItem("loggedInUser", JSON.stringify(res.data)); 
            setForm({...form, password: '', confirmPassword: ''}); //clear state -> password
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
                value={form.userName}
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
                value={form.email}
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
                value={form.password}
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
                value={form.confirmPassword}
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
                value={form.firstName}
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
                value={form.lastName}
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
                value={form.birthday}
                required              
                />
                <Span/> 
            </InputWrapper>
            <StyledBtnLogin onClick={handleSubmit}>Criar Conta</StyledBtnLogin>
            </form>
        </StyledSignUpContainer>
    )
}

