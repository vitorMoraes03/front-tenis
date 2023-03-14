/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import imgNav from '../../images/logo_modern.png';
import { StyledFlex } from '../../global';
import { AuthContext } from '../../contexts/authContext';
import { CartContext } from '../../contexts/cartContext';
import { StyledNavBar, StyledLinks, StyledCart } from './styles';
import CartModal from '../Modals/Cart';

function NavBar({ modalCart, setModalCart }) {
  const { loggedInUser } = useContext(AuthContext);
  const { order } = useContext(CartContext);

  return (
    <StyledNavBar>
      <StyledLinks>
        <Link to="/">
          <img src={imgNav} alt="Logo Sneakers" />
          <h1>Motion</h1>
        </Link>
        <Link to="./shop">Shop</Link>
        <Link to="">Quem somos</Link>
      </StyledLinks>
      <StyledFlex>
        {loggedInUser ? <p>{`Olá, ${loggedInUser.user.firstName}`}</p> : null}
        <Link to={loggedInUser ? '/profile' : '/login'}>
          <ion-icon name="person-outline" />
        </Link>
        <Link to="/profile">
          <ion-icon name="search-outline" />
        </Link>
        <StyledCart to="/checkout">
          <ion-icon name="cart-outline" />
          <p>{order.length === 0 ? null : order.length}</p>
        </StyledCart>
      </StyledFlex>
      <CartModal modalCart={modalCart} setModalCart={setModalCart} />
    </StyledNavBar>
  );
}

export default NavBar;
