import { api } from "../../api/api";
import { Form } from "../../components/Form";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { StyledSignUpContainer } from "../SignUp/styles";
import { StyledBtnLogin } from "../../global";
import { useNavigate } from "react-router";

export function Profile(){
    const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
    const user = loggedInUser.user;
    const navigate = useNavigate();
    const [edition, setEdition] = useState({
        userName: user.userName,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
        firstName: user.firstName,
        lastName: user.lastName,
        birthday: user.birthday,
    });

    // async function handleSubmit(e){
    //     e.preventDefault();
    //     try {
    //         const res = await api.get("/user/profile");
    //         console.log(res);
    //     } catch (err){
    //         console.log(err);
    //     }
    // }

    async function logOut(){
        localStorage.removeItem('loggedInUser');
        setLoggedInUser(null);
        navigate('/');
    }

    return (
       <StyledSignUpContainer>
            <h1>Minha Conta</h1>
            <form>
                <Form formNewUser={false} form={edition} setForm={setEdition}/>
            </form>
            <StyledBtnLogin onClick={logOut}>Teste: deslogar</StyledBtnLogin>
       </StyledSignUpContainer>
    )
}