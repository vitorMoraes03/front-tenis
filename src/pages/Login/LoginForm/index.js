import { InputWrapper } from "../../../global";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { api } from "../../../api/api";
import { StyledForm, StyledContainerBtn, StyledBtnLogin } from "../styles.js";

export function LoginForm(){
    const navigate = useNavigate();
    const { setLoggedInUser } = useContext(AuthContext);

    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    });

    function handleChange(e){
        setFormLogin({...formLogin, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const res = await api.post("/user/login", formLogin);
            setLoggedInUser({ ...res.data }); 
            localStorage.setItem("loggedInUser", JSON.stringify(res.data)); 
            navigate('/');
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
                    // type="password"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={formLogin.email}
                    required
                    />
                    <span>Please use a valid email address, such as user@example.com.</span>
            </InputWrapper>
            <InputWrapper>
                    <label htmlFor="inputPassword">Password:</label>
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