import React from 'react'
import {TextField} from "@mui/material";

export default function SearchBar() {
  return (
    <div>
        <TextField id="outlined-basic" label="Search" variant="outlined" placeholder='Search movies...' />
    </div>
  )
}
