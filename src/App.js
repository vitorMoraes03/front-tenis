import { NavBar } from "./components/Nav";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { LoginPage } from "./pages/LoginPage";
import styled from "styled-components";
import { GlobalStyle } from "./global";
import { Routes, Route, Navigate } from "react-router-dom";

const AppContainer = styled.div`
  padding-top: 8rem; // Atençao, problemático, responsividade...
  background-color: var(--main-color);
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <AppContainer>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
      <Footer/>
    </AppContainer>
    </>
  );
}

export default App;
