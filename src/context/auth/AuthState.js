import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

import axios from "axios";

import { REGISTER, LOGIN, LOGOUT, AUTH_ERROR } from "../types";

const AuthState = (props) => {
   const initialState = {
      token: localStorage.getItem("token"),
      isAuthenticated: false
   };

   const [state, dispatch] = useReducer(authReducer, initialState);

   const baseUrl = process.env.REACT_APP_HOSTED_URL || "http://localhost:5000";

   // Register
   const register = async (formData) => {
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };

      try {
         const res = await axios.post(
            `${baseUrl}/api/v2/auth/register`,
            formData,
            config
         );

         dispatch({
            type: REGISTER,
            payload: res.data,
         });
      } catch (error) {
         dispatch({
            type: AUTH_ERROR,
            payload: error,
         });
      }
   };

   // Login
   const login = async (formData) => {
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };

      try {
         const res = await axios.post(
            `${baseUrl}/api/v2/auth/login`,
            formData,
            config
         );

         dispatch({
            type: LOGIN,
            payload: res.data,
         });
      } catch (error) {
         dispatch({
            type: AUTH_ERROR,
            payload: error,
         });
      }
   };

   // Logout
   const logout = () => dispatch({ type: LOGOUT });

   return (
      <AuthContext.Provider
         value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            register,
            login,
            logout,
         }}
      >
         {props.children}
      </AuthContext.Provider>
   );
};

export default AuthState;
