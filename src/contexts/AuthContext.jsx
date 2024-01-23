import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

  const [token, setToken] = useState(null)

  const register = async (formData) => {

    try {
      const res = await fetch ('https://js2-ecommerce-api.vercel.app/api/auth/register')
      if(res.status !== 201) {
        throw new Error('Something didn´t work')
      }
    } catch (error) {
      return {error: error.message}
    }
  }
    
  const value = {

  }

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

export const useAuth = () => {
  const context = useContext(AuthContext)

  if(!context) throw new Error ('useAuth must be inside an AuthContextProvider')
  return context
}