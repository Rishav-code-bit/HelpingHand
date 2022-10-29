import React, { useState } from "react";
import AuthContext from './AuthContext';

const AuthState = (props) => {

    const [state, setState] = useState({
        email: "",
        isLogged: false,
    });

    return(
        <AuthContext.Provider value={{state, setState}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;