import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Search.css';

const Search = () => {
    return (
        <div className='search'>
            <TextField style={{ width: 600, borderRadius: 5}} InputProps={{ disableUnderline: true }} placeholder=' Search'  />
        </div>
    )
}

export default Search
