import React from 'react'
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    btn: {
        background: "white"
    }

});
function ButtonSearch(props) {
    const classes = useStyles();
    return (
        <Grid container justify="center">
            <Grid item >
                <Button variant="outlined" color="primary" size="large" onClick={props.submit} className={classes.btn} disabled={props.validString ? true : false}>
                    Submit
                </Button>
            </Grid>
        </Grid>

    )
}

export default ButtonSearch
