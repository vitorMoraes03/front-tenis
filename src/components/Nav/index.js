import imgNav from "../../images/logo_modern.png";
import { Link, useNavigate } from "react-router-dom";
import { StyledFlex } from "../../global";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { CartContext } from "../../contexts/cartContext";
import { StyledNavBar, StyledLinks, StyledCart } from "./styles";


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