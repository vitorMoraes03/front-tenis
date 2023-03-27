/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import imgNav from '../../images/logo_modern.png';
import { AuthContext } from '../../contexts/authContext';
import { CartContext } from '../../contexts/cartContext';
import {
  StyledNavBar,
  StyledLinks,
  StyledCart,
  StyledContainerUser,
} from './styles';
import CartModal from '../Cart';
import { isSmallScreen } from '../../global';

function NavBar({ modalCart, setModalCart, setPromoText, defaultText }) {
  const { loggedInUser } = useContext(AuthContext);
  const { order } = useContext(CartContext);

  const handleClick = () => {
    if (order.length > 0) {
      setPromoText(defaultText);
      setModalCart(true);
      return;
    }
    setPromoText('Carrinho vazio.');
  };

  return (
    <StyledNavBar>
      <StyledLinks>
        <Link to="/">
          <img src={imgNav} alt="Logo Sneakers" />
          {isSmallScreen() ? null : <h1>Motion</h1>}
        </Link>
        {isSmallScreen() ? null : <Link to="./shop">Shop</Link>}
      </StyledLinks>
      <StyledContainerUser>
        {loggedInUser ? (
          <div className='div-hello'>
            <p>Olá,</p>
            <p>{loggedInUser.user.firstName}</p>
          </div>
        ) : null}
        <Link to={loggedInUser ? '/profile' : '/login'}>
          <ion-icon name="person-outline" />
        </Link>
        <StyledCart onClick={() => handleClick()}>
          <ion-icon name="cart-outline" />
          <p>{order.length === 0 ? null : order.length}</p>
        </StyledCart>
      </StyledContainerUser>
      <CartModal modalCart={modalCart} setModalCart={setModalCart} />
    </StyledNavBar>
  );
}

export default NavBar;
