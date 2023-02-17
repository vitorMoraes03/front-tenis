import { createContext, useState, useEffect } from "react";

//Cria um contexto do React, token string vazio, objeto vazio
const AuthContext = createContext({ token: "", user: {} });

//função para gerar um componente 'wraper' p passar o contexto no App
function AuthContextComponent(props) {
  const [loggedInUser, setLoggedInUser] = useState({ token: "", user: {} });

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    const parsedStoredUser = JSON.parse(storedUser || '""');

    if (parsedStoredUser.token) {
      setLoggedInUser(parsedStoredUser);
    } else {
      setLoggedInUser(null);
    }
  }, []);

  return (
    //Vai ser colocado no App
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextComponent };