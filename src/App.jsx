/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login/LoginContainer';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Shop from './pages/Shop';
import { GlobalStyle } from './global';
import { AuthContextComponent } from './contexts/authContext';
import { CartContextComponent } from './contexts/cartContext';
import CheckOut from './pages/CheckOut';
import { AppContainer, StyledPromo } from './styles';

function App() {
  const [modalCart, setModalCart] = useState(false);
  const [promoText, setPromoText] = useState(
    'Entrega grátis para todo o Brasil.'
  );

  useEffect(() => {
    setInterval(() => {
      if (promoText !== 'Entrega grátis para todo o Brasil.')
        setPromoText('Entrega grátis para todo o Brasil.');
    }, 10000);
  }, [promoText]);

  return (
    <AuthContextComponent>
      <CartContextComponent>
        <GlobalStyle />
        <AppContainer>
          <NavBar modalCart={modalCart} setModalCart={setModalCart} />
          <StyledPromo>
            <p>{promoText}</p>
          </StyledPromo>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
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
                <Shop setModalCart={setModalCart} modalCart={modalCart} />
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
