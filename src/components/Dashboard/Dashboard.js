import { Grid } from '@material-ui/core'
import React from 'react'
import Display from './components/Display/Display';

function Dashboard() {
    return (
        <Grid container >
            <Grid item>
                <Display />
            </Grid>
        </Grid>
    )
}

export default Dashboard
