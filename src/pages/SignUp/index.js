import { StyledSignUpContainer } from "./styles";
import { StyledBtnLogin } from "../../global";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Form } from "../../components/Form";

export function SignUp(){
    const navigate = useNavigate();
    const { setLoggedInUser } = useContext(AuthContext);

    const [form, setForm] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        birthday: '',
    });

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
            <Form formNewUser={true} formState={{form, setForm}}/>
            <StyledBtnLogin onClick={handleSubmit}>Criar Conta</StyledBtnLogin>
            </form>
        </StyledSignUpContainer>
    )
}

