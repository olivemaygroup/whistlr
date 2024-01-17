import { useContext } from 'react'
import { MyIncidentsContext } from '../context/MyIncidentsContext'

export const useMyIncidentsContext = () => {
  const context = useContext(MyIncidentsContext)

  if (!context) {
    throw Error ('UseMyIncidents context must be used inside a MyIncidentsContext provider')
  }
  return context
}