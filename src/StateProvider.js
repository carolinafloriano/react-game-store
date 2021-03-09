import React,{createContext, useContext, useReducer} from 'react'

//prepara a camada de dados
export const StateContext = createContext();

//envolve nossos componentes e fornece o provedor
export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//É assim que podemos usá-lo dentro de um componente
export const useStateValue = () => useContext(StateContext);
