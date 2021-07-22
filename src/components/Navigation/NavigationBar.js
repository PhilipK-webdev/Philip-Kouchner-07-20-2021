import React from 'react'
import FavoritePage from './components/Favorite/FavoritePage'
import MainPage from './components/Main/MainPage'
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        justifyContent: "flex-end",
        flexWrap: "initial !important"
    },
    item: {
        marginRight: "10px",
        marginTop: "5px"
    },
    title: {
        fontSize: "25px",
        marginLeft: "10px",
        display: "flex",
        color: "white"
    },
    mainRoot: {
        flexWrap: "initial",
        marginTop: "10px",
    }

});
function NavigationBar() {
    const classes = useStyles();
    return (
        <Grid container className={classes.mainRoot} >
            <Grid item >
                <Typography className={classes.title}>
                    Weather
                    <Typography className={classes.title}>
                        App
                    </Typography>
                </Typography>
            </Grid>
            <Grid container className={classes.root}>
                <Grid item className={classes.item}>
                    <MainPage />
                </Grid>
                <Grid item className={classes.item}>
                    <FavoritePage />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default NavigationBar
