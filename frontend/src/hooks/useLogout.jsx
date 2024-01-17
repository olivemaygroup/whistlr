import { useAuthContext } from "./useAuthContext";
import { useMycasesContext } from './useMyCasesContext.jsx'

export const useLogout = () => {
 
  const { dispatch } = useAuthContext()
  const { dispatch: myCasesDispatch } = useMycasesContext()
  
 
  const logout = () => {
    localStorage.removeItem('user')

    dispatch({type: 'LOGOUT'})
    myCasesDispatch({type: 'SET_MYCASES', payload: null})
  } 
  return {logout}
} 