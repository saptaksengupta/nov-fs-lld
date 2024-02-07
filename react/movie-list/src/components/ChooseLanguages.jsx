import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';

export default function ChooseLanguage({ onLanguageChange }) {
    const [language, setLanguage] = React.useState('');

    useEffect(() => {
        setLanguage('all');
    }, []);

    const handleChange = (event) => {
        setLanguage(event.target.value);
        if (onLanguageChange) {
            onLanguageChange(event.target.value);
        }
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Choose Language"
                onChange={handleChange}
            >
                <MenuItem value={'all'}>All</MenuItem>
                <MenuItem value={'English'}>English</MenuItem>
                <MenuItem value={'Hindi'}>Hindi</MenuItem>
                <MenuItem value={'Tamil'}>Tamil</MenuItem>
            </Select>
        </FormControl>
    );
}