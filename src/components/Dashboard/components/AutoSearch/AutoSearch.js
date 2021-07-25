import React from 'react'
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Autocomplete from '@material-ui/lab/Autocomplete';
import ButtonSearch from '../Button/ButtonSearch';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    textField: {
        background: "white",
    },
    form: {
        width: "80%"
    },
    autocompleteTag: {
        marginBottom: "2%",
        marginLeft: "10%"
    },
    div: {
        marginTop: "25px"
    }

});
function AutoSearch(props) {

    const classes = useStyles();
    return (
        <Grid container >
            <Grid item xs={12} sm={10}>
                <FormControl variant="outlined" className={classes.form}>
                    <Autocomplete
                        options={props.arrayCity}
                        id="controlled-demo"
                        value={props.searchCity}
                        getOptionLabel={(option) => option}
                        onKeyUp={props.onKeyPress}
                        onChange={props.onSave}
                        renderInput={(params) => <TextField {...params} margin="normal" variant="outlined" className={classes.textField} />}
                        className={classes.autocompleteTag}
                    />
                </FormControl>
            </Grid>
            <Grid item xs sm={2} className={classes.div} >
                <ButtonSearch submit={props.submit} validString={props.validString} />
            </Grid>
        </Grid>
    )
}

export default AutoSearch
