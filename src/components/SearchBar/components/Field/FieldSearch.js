import React from 'react'
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Autocomplete from '@material-ui/lab/Autocomplete';
import ButtonSearch from '../Button/ButtonSearch';
import { Grid } from '@material-ui/core';
function FieldSearch() {
    return (
        <Grid container>
            <Grid item >
                <FormControl variant="outlined" style={{ marginRight: "50px" }}>
                    <Autocomplete
                        // options={arrayFood}
                        // id="controlled-demo"
                        // value={searchFood}
                        // getOptionLabel={(option) => option}
                        // onKeyUp={onKeyPress}
                        // onChange={onSave}
                        autoHighlight
                        renderInput={(params) => <TextField {...params} margin="normal" variant="outlined" />}
                        style={{ marginBottom: "25px", width: "500px" }}
                    />
                </FormControl>
            </Grid>
            <Grid item style={{ marginTop: "25px" }}>
                <ButtonSearch />
            </Grid>
        </Grid>
    )
}

export default FieldSearch
