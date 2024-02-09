import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../contenxt-api/ThemeContext';
import { THEME_ACTION_TYPES } from '../contenxt-api/ThemeReducer';
import "../styles/style.css";
import ThemedButton from './ThemedButton';

export default function NavBar() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const onChangeTheme = () => {
        // TODO: Change the theme
        if (darkMode) {
            // I need to do light
            theme.dispatch({type: THEME_ACTION_TYPES.LIGHT});
        } else {
            // I need to do darl
            theme.dispatch({type: THEME_ACTION_TYPES.DARK});
        }
    }

  return (
    <div className={`navbar ${darkMode ? "navbar-dark" : "navbar-light"}`}>
        <ThemedButton label={'Change Theme'} action={onChangeTheme} />
    </div>
  )
}
