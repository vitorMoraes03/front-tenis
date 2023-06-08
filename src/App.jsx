/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import NavBar from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login/LoginContainer';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Shop from './pages/Shop';
import { GlobalStyle } from './global';
import { AuthContextComponent, AuthContext } from './contexts/authContext';
import { CartContextComponent } from './contexts/cartContext';
import CheckOut from './pages/CheckOut';
import { AppContainer, StyledPromo } from './styles';

function App() {
  const { t } = useTranslation();
  const [modalCart, setModalCart] = useState(false);
  const defaultText = 'Imagens criadas com Inteligência Artificial.';
  const [promoText, setPromoText] = useState(defaultText);
  const { loggedInUser } = useContext(AuthContext);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    setTimeout(() => {
      if (promoText !== defaultText) setPromoText(defaultText);
    }, 15000);

    if (loggedInUser) {
      setPromoText(defaultText);
    }
  }, [promoText, loggedInUser]);

  return (
    <AuthContextComponent>
      <CartContextComponent>
        <GlobalStyle />
        <AppContainer>
          <NavBar
            modalCart={modalCart}
            setModalCart={setModalCart}
            setPromoText={setPromoText}
            defaultText={defaultText}
          />
          <StyledPromo>
            <p>{t(`${promoText}`)}</p>
          </StyledPromo>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
              path="/home"
              element={
                <Home
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                />
              }
            />
            <Route path="/login" element={<Login promoText={promoText} />} />
            <Route
              path="/signup"
              element={<SignUp setPromoText={setPromoText} />}
            />
            <Route
              path="/profile"
              element={<Profile setPromoText={setPromoText} />}
            />
            <Route
              path="/shop"
              element={
                <Shop
                  setModalCart={setModalCart}
                  modalCart={modalCart}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                />
              }
            />
            <Route
              path="/checkout"
              element={<CheckOut setPromoText={setPromoText} />}
            />
          </Routes>
          <Footer />
        </AppContainer>
      </CartContextComponent>
    </AuthContextComponent>
  );
}

export default App;
