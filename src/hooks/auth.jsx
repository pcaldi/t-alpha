/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";


const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})


  async function signIn({ taxNumber, password }) {
    try {

      const response = await api.post("/api/auth/login", { taxNumber, password })
      const { token } = response.data.data;

      localStorage.setItem("@token", token)


      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ token })


    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Erro ao fazer login. Tente novamente.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@token");
    delete api.defaults.headers.common['Authorization'];
    setData({});
  }



  useEffect(() => {
    const token = localStorage.getItem("@token")

    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({
        token
      })
    }
  }, [])


  return (
    <AuthContext.Provider value={{ signIn, signOut, token: data.token }} >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}


export { AuthProvider, useAuth }
