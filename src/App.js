import { NavBar } from "./components/Nav";
import { Home } from "./components/Home";
import { Gallery } from "./components/Gallery";
import { BigImage } from "./components/BigImage";
import { Footer } from "./components/Footer";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    /* border: 1px solid red; */
  }

  html {
        font-size: 62.5%;
        --main-color: rgba(173, 216, 230);
        --space-small: 1rem;
    }
`

const AppContainer = styled.div`
  padding-top: 6rem;
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
