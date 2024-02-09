import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../contenxt-api/ThemeContext';
import "../styles/style.css";

export default function ThemedButton({ label, action }) {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const onBtnClicked = () => {
        if (action) {
            action();
        }
    }

    return (
        <button className={`btn ${darkMode ? 'btn-dark' : 'btn-light'}`} onClick={onBtnClicked} >{label}</button>
    )
}
