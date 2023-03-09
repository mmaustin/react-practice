import React, {useReducer, useContext} from 'react';
import reducer from './reducer';

import {
    ADD_FRUIT,
    HANDLE_CHANGE,
} from './actions';

const initialState = {
    fruits: ['apples', 'oranges', 'peaches'],
    team: '',
    player: '',
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

    const handleChange = ({team, player}) => {
      dispatch({type: HANDLE_CHANGE, payload: {team, player}})
    }

    return(
        <AppContext.Provider
        value={{
          ...state,
          addFruit,
          handleChange,
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