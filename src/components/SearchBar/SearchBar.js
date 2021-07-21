import { Grid } from '@material-ui/core'
import React from 'react'
import FieldSearch from './components/Field/FieldSearch'

function SearchBar() {
    return (
        <Grid container >
            <Grid item>
                <FieldSearch />
            </Grid>
        </Grid>
    )
}

export default SearchBar
