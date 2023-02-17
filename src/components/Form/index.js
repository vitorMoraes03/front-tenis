import { InputWrapper } from "../../global";

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

export function Form(props){
    const formNewUser = props.formNewUser;
    const form = props.form;
    const setForm = props.setForm;

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    return (
        <div>
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
            {formNewUser ? 
            <>
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
            </> 
            :
            null
            }
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
        </div>
    )
}