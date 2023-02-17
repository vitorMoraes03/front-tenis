import styled from "styled-components";
import imgNav from "../../images/logo_modern.png";
import { Link, useNavigate } from "react-router-dom";
import { StyledFlex } from "../../global";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

const StyledNavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 var(--space-medium);
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    background-color: var(--main-color);
`

const StyledLinks = styled(StyledFlex)`
    div {
        display: flex;
        align-items: center;
    }

    div:hover {
        cursor: pointer;
    }

    h1 {
        font-size: var(--font-logo);
        margin-bottom: -2px;
        text-transform: none;
    }

    img {
        height: var(--icons-size);
    }

    a {
        font-size: var(--font-medium);
        text-transform: uppercase;
    }
`

export function NavBar(props){
    const navigate = useNavigate();
    const form = props.form;
    const { loggedInUser } = useContext(AuthContext);

    function testFormState(){
        console.log(form);
    }

    return (
        <StyledNavBar>
            <StyledLinks>
                <div onClick={() => navigate('/')}>
                <img src={imgNav} alt='Logo Sneakers'/>
                <h1>Made</h1>
                </div>
                <Link to={""}>Shop</Link>
                <Link to={""}>Quem somos</Link>
            </StyledLinks>
            <StyledFlex>
                {loggedInUser ? 
                <p>{`Olá, ${loggedInUser.user.firstName}`}</p> :
                null}
                <Link to={loggedInUser ? "/profile" : "/login"}>
                    <ion-icon name="person-outline"/>
                </Link>
                <Link to={""} onClick={testFormState}><ion-icon name="search-outline"/></Link>               
                <Link to={""}><ion-icon name="cart-outline"/></Link>
            </StyledFlex>
        </StyledNavBar>
    )
}