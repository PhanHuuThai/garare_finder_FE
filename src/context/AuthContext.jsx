// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { jwtDecode } from 'jwt-decode'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        isAuthenticated: false,
        user: null
    })

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            //const decoded = jwtDecode(token);
            setAuth({
                isAuthenticated: true,
                user: token
            })
        }
    }, []);

    const login = (data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify((data.data.data)));
        //const decoded = jwtDecode(token);
        setAuth({
            isAuthenticated: true,
            user: data.data.data
        })
    }

    const logout = () => {
        localStorage.removeItem('token');
        setAuth({
            isAuthenticated: false,
            user: null
        })
    }

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

