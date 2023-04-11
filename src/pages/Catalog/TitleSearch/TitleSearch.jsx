import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import debounce from "@material-ui/core/utils/debounce";


function TitleSearch({title, setTitle}) {

    let search = (e) => {
        setTitle(e.target.value)
    }
    return (
        <Box
            className="catalog__aside-select"
            noValidate
            autoComplete="off"
        >
            <TextField defaultValue={title} onChange={debounce(search, 500)} id="outlined-basic" className="catalog__aside-item"
                       label={'Название'} variant="outlined"/>
        </Box>
    );
}

export default TitleSearch;