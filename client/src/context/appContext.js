import React, {useReducer, useContext} from 'react';
import reducer from './reducer';

import {
    ADD_FRUIT
} from './actions';

const initialState = {
    fruits: ['apples', 'oranges', 'peaches']
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addFruit = () => {
        //const fruit = ['strawberries'];
        dispatch({
            type: ADD_FRUIT,
            payload: {fruit: ['strawberries']}
        })
    }

    return(
        <AppContext.Provider
        value={{
          ...state,
          addFruit
        }}
      >
        {children}
      </AppContext.Provider>        
    )
}

const useAppContext = () => {
    return useContext(AppContext)
  }
  
export { AppProvider, useAppContext, initialState } 