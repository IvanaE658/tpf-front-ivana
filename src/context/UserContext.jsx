import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const UserContext = createContext()

const UserProvider = (props) => {
  const [user, setUser] = useState(null)

  const login = async (username, password) => {
    // realizar una petición al backend 
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })

    if (response.ok) {
      const token = await response.json()
      setUser(true)
      return token
    } else {
      return false
    }
  }

  const logout = () => {
    setUser(null)
  }


  const register = async (newUserData) => {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",

        body: JSON.stringify(newUserData),
        headers: {
          "Content-Type": "application/json"
        }
      })


      if (!response.ok) throw new Error("Error al registrar")

      const createdUser = await response.json()

      setUser(true)

    } catch (error) {
      console.error("Error en register:", error)
      return false
    }
  }

  return (
    <UserContext.Provider value={{ login, logout, user, register }}>
      {props.children}
    </UserContext.Provider>
  )
}

const useAuth = () => useContext(UserContext)

export { UserProvider, useAuth }

