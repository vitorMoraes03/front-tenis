import { createContext, useState, useEffect, useMemo } from 'react';

// Cria um contexto do React, token string vazio, objeto vazio
const AuthContext = createContext({ token: '', user: {} });

// função para gerar um componente 'wraper' p passar o contexto no App
function AuthContextComponent({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({ token: '', user: {} });

  const authContextValue = useMemo(
    () => ({ loggedInUser, setLoggedInUser }),
    [loggedInUser, setLoggedInUser]
  );

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    const parsedStoredUser = JSON.parse(storedUser || '""');

    if (parsedStoredUser.token) {
      setLoggedInUser(parsedStoredUser);
    } else {
      setLoggedInUser(null);
    }
  }, []);

  useEffect(() => {}, [loggedInUser]);

  return (
    // Vai ser colocado no App
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextComponent };
