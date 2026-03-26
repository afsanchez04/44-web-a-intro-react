import { createContext, useContext, useState } from "react";

//1. Crear el contexto
const AuthContext = createContext()

//2. Hook personalizado
export function useAuth() {
  return useContext(AuthContext)
}

//3. Proveedor del contexto

export const AuthProvider = ({children}) => {

  //Lógica de autenticación
  //const isAuthenticated = false
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = (callback) => {
    setIsAuthenticated(true)
    callback
  }

  return (
    <AuthContext.Provider value={{isAuthenticated, login}}>
      {children}
    </AuthContext.Provider>
  )
}
