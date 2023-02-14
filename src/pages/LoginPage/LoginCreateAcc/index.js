import { StyledBtnLogin } from "../../../global";
import styled from "styled-components";

const StyledCreateAcc = styled.div`
width: 50%;
padding: 6rem var(--space-medium);  
background-color: var(--secondary-shade);

h3 {
    font-weight: 800;
    margin-bottom: var(--space-small);
}

p {
    margin-bottom: 1rem;
    font-size: var(--font-medium);
}

ul {
    margin-left: var(--space-medium);
    margin-bottom: 3rem;
}

li {
    list-style: initial;
    margin-bottom: 0.5rem;
    padding-left: 1rem;
}
`

export function LoginCreateAcc(){
    return (
        <StyledCreateAcc>
        <h3>Cliente novo?</h3>
        <div>
            <p>Create an account with us and you'll be able to:</p>
            <ul>
                <li>Check out faster</li>
                <li>Save multiple shipping addresses</li>
                <li>Access your order history</li>
                <li>Track new orders</li>
            </ul>
            <StyledBtnLogin>Criar conta</StyledBtnLogin>
        </div>
        </StyledCreateAcc> 
    )
}