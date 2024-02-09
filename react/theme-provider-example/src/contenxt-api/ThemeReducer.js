import React from 'react'

export const defaultTheme = {
    darkMode: false
};

export const THEME_ACTION_TYPES = {
    "DARK": "DARKMODE",
    "LIGHT": "LIGHTMODE"
}

export default function ThemeReducer(state, action) {
  switch(action.type) {
    case THEME_ACTION_TYPES.LIGHT: 
        return {
            darkMode: false
        };
    case THEME_ACTION_TYPES.DARK: 
        return {
            darkMode: true
        }
    default: 
        return state
  } 
}
