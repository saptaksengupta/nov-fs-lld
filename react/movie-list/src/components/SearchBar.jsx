import React from 'react'
import { TextField } from "@mui/material";

export default function SearchBar({onSearch}) {

    const onSearchInput = (e) => {
        const searchValue = e.target.value;
        if (onSearch && searchValue !== null) {
            onSearch(searchValue); //??
        }
    }


    return (
        <div>
            <TextField id="outlined-basic" label="Search" variant="outlined" onInput={onSearchInput} placeholder='Search movies...'  />
        </div>
    )
}
