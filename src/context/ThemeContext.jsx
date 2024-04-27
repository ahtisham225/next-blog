"use client";
import { createContext, useEffect, useState } from "react";
// import { eState } from "react";

export const ThemeContext = createContext()

const getFromLocalStoarge = () => {
    if (typeof window !== 'undefined') {
        const value = localStorage.getItem('theme');
        return value || 'light';
    }
};

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(()=>{
       return getFromLocalStoarge();
    });

    

    const toogle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);
    return <ThemeContext.Provider value={{theme, toogle}}>
            {children}
        </ThemeContext.Provider>;
    };
