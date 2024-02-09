import React, { useReducer } from 'react'
import { ThemeContext } from './ThemeContext'
import ThemeReducer, { defaultTheme } from './ThemeReducer';

export default function ThemeProvider(props) {

    //const [state, dispatch] = useReducer(reducer, initial state);
    const [state, dispatch] = useReducer(ThemeReducer, defaultTheme);

  return (
    <ThemeContext.Provider value={{state, dispatch}}>
        {props.children}
    </ThemeContext.Provider>
  )
}
