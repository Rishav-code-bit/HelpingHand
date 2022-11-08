import React, { useState } from "react";
import AuthContext from './AuthContext';

const AuthState = (props) => {

    const [state, setState] = useState({
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        isLogged: localStorage.getItem('isLogged'),
    });

    return(
        <AuthContext.Provider value={{state, setState}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;