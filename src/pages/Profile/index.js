import { api } from "../../api/api";
import { StyledLoginContainer } from "../Login/LoginContainer";
import { InputWrapper } from "../../global";

export function Profile(){

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const res = await api.get("/user/profile");
            console.log(res);
        } catch (err){
            console.log(err);
        }
    }

    return (
       <StyledLoginContainer>
            <h1>Minha Conta</h1>
            <form>
                <InputWrapper>
                    <label></label>
                    <input></input>
                </InputWrapper>
            </form>
       </StyledLoginContainer>
    )
}