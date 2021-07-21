import React from 'react'
import { Button, Grid } from "@material-ui/core";
function ButtonSearch(props) {
    return (
        <Grid container>
            <Grid item>
                <Button variant="outlined" color="primary" size="large" onClick={props.submit} >
                    Submit
                </Button>
            </Grid>
        </Grid>

    )
}

export default ButtonSearch
