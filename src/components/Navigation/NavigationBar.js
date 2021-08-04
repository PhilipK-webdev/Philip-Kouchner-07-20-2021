import React from 'react'
import MainPage from './components/Main/MainPage'
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import FavouritePage from './components/FavouritePage/FavouritePage';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const useStyles = makeStyles({
    root: {
        display: "block",
        position: "absolute",
        top: "25%",
        marginLeft: "5px",
        width: "fit-content"
    },
    item: {
        marginTop: "10px"
    },
    title: {
        fontSize: "25px",
        marginLeft: "10px",
        display: "flex",
        color: "white",
        paddingTop: "5%"
    },
    mainRoot: {
        flexWrap: "initial",
        display: "block",
        height: "100vh"
    },
    toggle: {
        marginTop: "0.3%",
        color: "white",

    }

});
function NavigationBar(props) {
    const classes = useStyles();
    return (
        <Grid container className={classes.mainRoot} >
            <Grid item >
                <Typography className={classes.title}>
                    WeatherApp
                </Typography>
            </Grid>
            <Grid container className={classes.root}>
                <Grid item className={classes.item}>
                    <MainPage />
                </Grid>
                <Grid item className={classes.item}>
                    <FavouritePage />
                </Grid>
                <Grid item className={classes.toggle}>
                    <FormGroup>
                        <FormControlLabel
                            label="Toggle"
                            control={<Switch checked={props.checked} onChange={props.handleChange} />}
                            style={{ fontSize: "20px" }}
                        />
                    </FormGroup>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default NavigationBar

