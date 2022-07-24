import React, { createContext, useReducer, useState } from "react";

export const AppContext = createContext();

export const appReducer = (state, action) => {
    console.log();

};

function AppContextProvider({ children }) {
    // const [auth, setauth] = useState(false);
    const [state, setstate] = useState({
        auth: false,
        token: null
    });
    const handlelogin = (token) => {
        setstate({
            ...state,
            auth: true,
            token: token
        });
    };
    const handlelogout = (token) => {
        setstate({
            ...state,
            auth: false,
            token: null
        });
    };

    return (
        <AppContext.Provider value={{ state, setstate, handlelogin, handlelogout }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;
