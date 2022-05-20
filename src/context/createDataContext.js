import React, { useReducer } from 'react';
//creating a function that automates the creation of react contexts for CRUD purposes
export default (reducer, actions, initialState) => {
  const Context = React.createContext()

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const boundActions = {}

    for(let key in actions) {
      boundActions[key] = actions[key](dispatch)
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    )
  }

  return { Context, Provider }
}