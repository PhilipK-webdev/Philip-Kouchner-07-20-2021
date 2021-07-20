import React from 'react'
import { Button, Grid } from "@material-ui/core";
function ButtonSearch() {
    return (
        <Grid container>
            <Grid item>
                <Button variant="outlined" color="primary" size="large" >
                    Submit
                </Button>
            </Grid>
        </Grid>

    )
}

export default ButtonSearch
