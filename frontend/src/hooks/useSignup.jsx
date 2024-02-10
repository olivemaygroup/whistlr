import { useState } from 'react' 
import { useAuthContext } from './useAuthContext.jsx'

export const useSignup = () => {
  const [error, SetError] = useState(null)
  const [isLoading, SetIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  
  
  async function signup (email, password) {
    SetIsLoading(true)
    SetError(null)
    
    const response = await fetch('http://localhost:3003/user/signup', {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password})
    })
    const json = await response.json()

    if (!response.ok) {
      SetIsLoading(false)
      SetError(json.error)
    }
    
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(json.token))
      dispatch({type: 'LOGIN', payload: json})
      SetIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}