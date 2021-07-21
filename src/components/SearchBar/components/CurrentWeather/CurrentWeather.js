import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(24),
            height: theme.spacing(18),
        },
    },
}));

function CurrentWeather(props) {

    const classes = useStyles();
    return (
        <Grid item className={classes.root}>
            <Paper variant="outlined" >
                <Typography>
                    Name: {props.objCurrentWeather[0]}
                </Typography>
                <Typography>
                    <img src={props.objCurrentWeather[1]} alt="icon" />
                </Typography>
                <Typography>
                    Metric: {props.objCurrentWeather[2]}
                </Typography>
            </Paper>
        </Grid >
    )
}

export default CurrentWeather


