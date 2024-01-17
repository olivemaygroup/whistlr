import { createContext, useReducer } from 'react'

export const MyCasesContext = createContext()

export const mycasesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MYCASES':
      return {
        mycases: action.payload
      }
    case 'CREATE_CASE':
      return {
        mycases: [action.payload, ...state.mycases]
      }
    case 'DELETE_CASE':
      return {
        mycases: state.mycases.filter((item) => item._id !== action.payload._id)
      }
    case 'REPORT_CASE':
      return {
        mycases: state.mycases.map((item) =>
          item._id === action.payload._id ? action.payload : item
        )
      };

    default: 
      return state
  }
}

export const MycasesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mycasesReducer, {
    mycases: null
  })

  return (
    <MyCasesContext.Provider value={{...state, dispatch}}>
      { children }
    </MyCasesContext.Provider>
  )
}