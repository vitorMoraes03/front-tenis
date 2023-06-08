/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
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
import isSmallScreen from '../../smallFunctions/isSmallScreen';

function NavBar({ modalCart, setModalCart, setPromoText, defaultText }) {
  const { loggedInUser } = useContext(AuthContext);
  const { order } = useContext(CartContext);
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const handleClick = () => {
    if (order.length > 0) {
      setPromoText(defaultText);
      setModalCart(true);
      return;
    }
    setPromoText('Carrinho vazio.');
  };

  function handleLanguage() {
    const lng = i18n.language;
    console.log(lng);

    if (lng === 'en-US') {
      i18n.changeLanguage('pt-BR');
      localStorage.setItem('language', 'pt-BR');
      return;
    }

    if (lng === 'pt-BR') {
      i18n.changeLanguage('en-US');
      localStorage.setItem('language', 'en-US');
    }
  }

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
          <div className="div-hello">
            <p>{t('Olá,')}</p>
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
        <button type="button" className="language-btn" onClick={handleLanguage}>
          {i18n.language === 'en-US' ? 'PT' : 'EN'}
        </button>
      </StyledContainerUser>
      <CartModal modalCart={modalCart} setModalCart={setModalCart} />
    </StyledNavBar>
  );
}

export default NavBar;
