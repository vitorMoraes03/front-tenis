import styled from "styled-components";
import imgNav from "../../images/logo_modern.png";
import { Link, useNavigate } from "react-router-dom";
import { StyledFlex } from "../../global";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { CartContext } from "../../contexts/cartContext";

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

const StyledCart = styled(Link)`
    position: relative;

    p {
        position: absolute;
        right: -5px;
        bottom: -3px;
    }
`

export function NavBar(){
    const navigate = useNavigate();
    const { loggedInUser } = useContext(AuthContext);
    const { order } = useContext(CartContext);

    return (
        <StyledNavBar>
            <StyledLinks>
                <div onClick={() => navigate('/')}>
                <img src={imgNav} alt='Logo Sneakers'/>
                <h1>Motion</h1>
                </div>
                <Link to={"./shop"}>Shop</Link>
                <Link to={""}>Quem somos</Link>
            </StyledLinks>
            <StyledFlex>
                {loggedInUser ? 
                <p>{`Olá, ${loggedInUser.user.firstName}`}</p> :
                null}
                <Link to={loggedInUser ? "/profile" : "/login"}>
                    <ion-icon name="person-outline"/>
                </Link>
                <Link to={"/profile"}><ion-icon name="search-outline"/></Link>               
                <StyledCart to={"/checkout"}>
                    <ion-icon name="cart-outline"/>
                    <p>{order.length === 0 ? null : order.length}</p>
                </StyledCart>
            </StyledFlex>
        </StyledNavBar>
    )
}