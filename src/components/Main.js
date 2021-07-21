import { Grid } from '@material-ui/core'
import React from 'react'
import SearchBar from './SearchBar/SearchBar'

function Main() {

    return (
        <Grid container style={{ justifyContent: "center" }}>
            <Grid item>
                <SearchBar />
            </Grid>
        </Grid>
    )
}

export default Main
