import { NavBar } from "./components/Nav";
import { Home } from "./components/Home";
import { Gallery } from "./components/Gallery";
import { BigImage } from "./components/BigImage";
import { Footer } from "./components/Footer";
import styled from "styled-components";
import { GlobalStyle } from "./global";

const AppContainer = styled.div`
  padding-top: 8rem; // Atençao, problemático, responsividade...
  background-color: var(--main-color);
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <AppContainer>
      <NavBar></NavBar>
      <Home></Home>
      <Gallery></Gallery>
      <BigImage></BigImage>
      <Footer></Footer>
    </AppContainer>
    </>
  );
}

export default App;
