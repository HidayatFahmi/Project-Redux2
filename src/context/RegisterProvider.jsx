import React from "react";
import axios from "axios";
import { createContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = ({children}) => {
    const [token, setToken] = useState([]);

    const onHandleRegister = (email,password) => {

        const loginData = {
            email: email,
            password: password,
          };
          
          axios
            .post("https://reqres.in/api/register", loginData)
            .then((res) => {
              const data = res;
              setToken(data.data.token);
              console.log("Berhasil mendapatkan token : "+token);
            })
            .catch((error) => {
              console.error("Gagal login:", error);
            });
    }

    return(
        <RegisterContext.Provider value={{token, onHandleRegister}}>
            {children}
        </RegisterContext.Provider>
    )
    
}