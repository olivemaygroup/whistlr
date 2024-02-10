import { createContext, useReducer } from "react";

export const MyIncidentsContext = createContext()

export const myincidentsReducer = (state, action) => {
  switch (action.type) { 
    case 'SET_INCIDENTS':
      return {
        myincidents: action.payload
      }
    case 'CREATE_INCIDENT':
      return {
        myincidents: [action.payload, ...state.myincidents]
      }
    case 'DELETE_INCIDENT':
      return {
        myincidents: state.myincidents.filter((item) => item._id !== action.payload._id)
      }
    default: 
      return state
  }
}

export const MyIncidentsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(myincidentsReducer, {
    myincidents: null
  })

  return (
    <MyIncidentsContext.Provider value={{...state, dispatch}}>
      { children }
    </MyIncidentsContext.Provider>
  )
}