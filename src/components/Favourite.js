import React, { useEffect, useState } from 'react'
import FavouriteCity from './Dashboard/components/FavouriteCity/FavouriteCity';
import { Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions';
import Message from './Message/Message';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginTop: "2%"
    },
    title: {
        color: "#306F8C",
        fontFamily: 'Raleway',
        fontSize: "58px",
        fontFeight: "800",
        lineHeight: "72px",
        margin: "0 0 24px",
        textTransform: "uppercase"
    },
    div: {
        marginTop: "5%",
        justifyContent: "none",
        display: "flex"
    },
    messageContainer: {
        justifyContent: "center"
    },
    message: {
        marginTop: "10%"
    }

});
function Favourite() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [isLocalStorage, setIsLocalStorage] = useState(false);
    const localStorageArrayCity = useSelector(state => {
        return state.root.localStorageArrayCity;
    });

    const isFavouriteEmpty = useSelector(state => {
        return state.root.isFavouriteEmpty;
    });

    useEffect(() => {
        if (localStorage.length > 0) {
            setIsLocalStorage(true);
            dispatch(actions.setCityLocal(JSON.parse(window.localStorage.getItem("city"))));
            dispatch(actions.setIsFavouriteEmpty(true));
        }
    }, [])

    return (
        <Grid container>
            <Grid container justifyContent="center" className={classes.root}>
                <Grid item >
                    <Typography variant="h4" color="primary" className={classes.title}>
                        Welcome to Favourite Page
                    </Typography>
                </Grid>
            </Grid>
            {isFavouriteEmpty ? localStorageArrayCity.map((objLocal, index) => (
                <Grid item xs={4} sm={6} className={classes.div}>
                    <FavouriteCity objLocal={objLocal} index={index} /> </Grid>
            )) : <Grid container className={classes.messageContainer}>
                <Grid item className={classes.message} sx={12} sm={6}>
                    <Typography>
                        <Message />
                    </Typography>
                </Grid>
            </Grid>}
        </Grid>
    )
}

export default Favourite
