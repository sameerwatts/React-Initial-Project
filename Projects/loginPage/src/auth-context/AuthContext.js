import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: true,
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const login = localStorage.getItem("isLoggedIn");
    if (login) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };


return <AuthContext.Provider 
value={{ isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>{props.children}</AuthContext.Provider>;
}

export default AuthContext;
