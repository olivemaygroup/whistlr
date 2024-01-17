import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, SetIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  
  const login = async (email, password) => {
    SetIsLoading(true)
    setError(null)

    const response = await fetch ('http://localhost:3003/user/login', {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })
    const json = await response.json()

    if (!response.ok) {
      SetIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(json))
      dispatch({type: 'LOGIN', payload: json})
      SetIsLoading(false)
    }
  }
  return { login, isLoading, error}
}