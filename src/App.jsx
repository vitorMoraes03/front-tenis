import styled from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Login } from './pages/Login/LoginContainer';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Shop from './pages/Shop';
import { GlobalStyle } from './global';
import { AuthContextComponent } from './contexts/authContext';
import { CartContextComponent } from './contexts/cartContext';
import CheckOut from './pages/CheckOut';

const AppContainer = styled.div`
  padding-top: 8rem; // Atençao, problemático, responsividade...
  background-color: var(--main-color);
`;

const StyledPromo = styled.div`
  text-align: center;
  border-top: 1px solid rgba(255, 243, 232, 0.3);

  p {
    padding: 1.2rem;
  }
`;

function App() {
  const [modalCart, setModalCart] = useState(false);

  return (
    <AuthContextComponent>
      <CartContextComponent>
        <GlobalStyle />
        <AppContainer>
          <NavBar modalCart={modalCart} setModalCart={setModalCart} />
          <StyledPromo>
            <p>Entrega grátis para todo o Brasil.</p>
          </StyledPromo>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/shop"
              element={
                <Shop setModalCart={setModalCart} modalCart={modalCart} />
              }
            />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
          <Footer />
        </AppContainer>
      </CartContextComponent>
    </AuthContextComponent>
  );
}

export default App;
