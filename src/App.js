import { NavBar } from "./components/NavBar";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    /* border: 1px solid red; */
  }

  html {
        font-size: 62.5%;
        --space-small: 1rem;
    }
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <div className="App">
      <NavBar></NavBar>
    </div>
    </>
  );
}

export default App;
