/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

import { api } from "../services/api";


const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ taxNumber, password }) {
    try {

      const response = await api.post("/api/auth/login", { taxNumber, password })
      const { token } = response.data.data;

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData(token)


    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Erro ao fazer login. Tente novamente.")
      }
    }
  }


  return (
    <AuthContext.Provider value={{ signIn, token: data.token }} >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}


export { AuthProvider, useAuth }
