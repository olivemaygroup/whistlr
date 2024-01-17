import { useContext } from 'react'
import { MyCasesContext } from '../context/MycasesContext.jsx'

export const useMycasesContext = () => {
  const context = useContext(MyCasesContext)

  if(!context) {
    throw Error ('UseMycasesContext must be used inside a MyCasesContextProvider')
  }
  return context
}
