import { api } from "../../api/api";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { StyledBtnLogin } from "../Login/styles";
import { useNavigate } from "react-router";
import { Input } from "../../components/Input";
import { StyledProfileContainer } from "./style";

/*

Quando dou reload na página, os dados do contexto se perde (naturalmente),
e as infos do profile somem. Como corrigir isso?

*/

export function Profile(){
    const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
    const user = loggedInUser.user;
    const navigate = useNavigate();
    
    const [edition, setEdition] = useState({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            birthday: user.birthday.slice(0, 10)
    });   

    const [emailMsg, setEmailMsg] = useState('');
    const [firstNameMsg, setFirstNameMsg] = useState('');
    const [lastNameMsg, setLastNameMsg] = useState('');
    const [birthdayMsg, setBirthdayMsg] = useState('');

    function handleChange(e){
        setEdition({...edition, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e){
        e.preventDefault();
        checkEmail();
        checkFirstName();
        checkLastName();    
        checkBirthday();
        try {
            const userEdited = await api.put("/user/edit", edition);
            localStorage.setItem("loggedInUser", JSON.stringify(userEdited)); 
        } catch (err){
            console.log(err);
        }
        navigate("/");
    }

    async function logOut(){
        localStorage.removeItem('loggedInUser');
        setLoggedInUser(null);
        navigate('/'); 
    }

    async function deleteAcc(){
        try {
            await api.delete("/user/delete");
            logOut();
        } catch (err){
            console.log(err.response.data);
        }
    }

    function checkEmail(){
        if(edition.email === ''){
            setEmailMsg('Campo Obrigatório.');
            return
        }
        const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm;
        if(!regex.test(edition.email)) setEmailMsg('Preencher corretamente.');
    }

    function checkFirstName(){
        if(edition.firstName === ''){
            setFirstNameMsg('Campo Obrigatório.');
            return
        }
        const regex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
        if(!regex.test(edition.firstName)) setFirstNameMsg('Preencher corretamente.');
    }

    function checkLastName(){
        if(edition.lastName === ''){
            setLastNameMsg('Campo Obrigatório.');
            return
        }
        const regex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
        if(!regex.test(edition.firstName)) setLastNameMsg('Preencher corretamente.');
    }

    function checkBirthday(){
        if(edition.birthday === ''){
            setBirthdayMsg('Campo Obrigatório.');
            return
        }
    }

    return (
       <StyledProfileContainer>
            <h1>Minha Conta</h1>
            <form>
            <Input 
                field={'Email'} 
                text={'Email'}
                value={edition.email} 
                span={emailMsg} 
                type={'text'} 
                handler={handleChange} 
            />
            <Input 
                field={'FirstName'} 
                text={'Primeiro Nome'} 
                value={edition.firstName} 
                span={firstNameMsg} 
                type={'text'} 
                handler={handleChange} 
            />
            <Input 
                field={'LastName'} 
                text={'Sobrenome'} 
                value={edition.lastName} 
                span={lastNameMsg} 
                type={'text'} 
                handler={handleChange} 
            />
            <Input 
                field={'Birthday'} 
                text={'Data de nascimento'} 
                value={edition.birthday} 
                span={birthdayMsg} 
                type={'date'} 
                handler={handleChange} 
            />
            </form>
            <div className="container-btn">
            <StyledBtnLogin onClick={logOut}>Sair</StyledBtnLogin>
            <StyledBtnLogin onClick={handleSubmit}>Editar</StyledBtnLogin>
            <StyledBtnLogin onClick={deleteAcc}>Apagar Conta</StyledBtnLogin>
            </div>
       </StyledProfileContainer>
    )
}