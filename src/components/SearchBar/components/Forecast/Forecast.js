import { Grid, Typography } from '@material-ui/core'
import React from 'react'

function Forecast(props) {
    return (
        <Grid>
            {props.data.map((details) => (
                <Typography>
                    {details}
                </Typography>
            ))}
        </Grid>
    )
}

export default Forecast
