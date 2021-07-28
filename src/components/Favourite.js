import React, { useEffect, useState } from 'react'
import FavouriteCity from './Dashboard/components/FavouriteCity/FavouriteCity';
import { Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginTop: "2%"
    },
    title: {
        color: "#306F8C",
        fontFamily: 'Raleway',
        fontSize: "35px",
        fontFeight: "800",
        lineHeight: "72px",
        margin: "0 0 24px",
        textTransform: "uppercase"
    },
    div: {
        marginTop: "5%",
        display: "flex",
        marginRight: "13%",
        marginLeft: "2%",
    },
    messageContainer: {
        justifyContent: "center"
    },
    message: {
        marginTop: "10%"
    }

});
function Favourite() {

    const classes = useStyles();
    const localStorageArrayCity = useSelector(state => {
        return state.root.localStorageArrayCity;
    });
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.length > 0) {
            let tempCity = JSON.parse(window.localStorage.getItem("city"));
            dispatch(actions.setCityLocal([...tempCity]));
        }

    }, [])
    return (
        <Grid container>
            <Grid container justifyContent="center" className={classes.root}>
                <Grid item >
                    <Typography variant="h6" color="primary" className={classes.title}>
                        Welcome to Favourite Page
                    </Typography>
                </Grid>
            </Grid>
            {localStorageArrayCity.map((objLocal, index) => (
                <Grid item xs={4} sm={3} className={classes.div}>
                    <FavouriteCity objLocal={objLocal} index={index} style={{ marginLeft: "14%", }} /> </Grid>
            ))}
        </Grid>
    )
}

export default Favourite
