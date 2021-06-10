import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: true,
    onLogout: () => {},
    onLogin: () => {},
})

export default AuthContext;