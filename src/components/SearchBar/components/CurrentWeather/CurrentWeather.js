import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    typography: {
        marginLeft: "5px",
    },
    image: {
        marginTop: "2px",
        contain: "content",
        width: "80px",
        height: "50px"
    }
}));

function CurrentWeather(props) {
    const classes = useStyles();
    return (
        <Grid item className={classes.root}>
            <Paper variant="outlined" >
                <Typography >
                    <img src={props.objCurrentWeather[1]} alt="icon" className={classes.image} />
                </Typography>
                <Typography className={classes.typography}>
                    Current City:<Typography></Typography>
                    {props.objCurrentWeather[0]}
                </Typography>

                <Typography className={classes.typography}>
                    Metric: {props.objCurrentWeather[2]}
                </Typography>
            </Paper>
        </Grid >
    )
}

export default CurrentWeather


