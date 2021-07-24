import React, { useEffect, useState } from 'react'
import FavouriteCity from './SearchBar/components/FavouriteCity/FavouriteCity';
import { Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions';
import Message from './Message/Message';
function Favourite() {
    const dispatch = useDispatch();
    const [isLocalStorage, setIsLocalStorage] = useState(false);
    const localStorageArrayCity = useSelector(state => {
        return state.root.localStorageArrayCity;
    });

    useEffect(() => {
        if (localStorage.length > 0) {
            setIsLocalStorage(true);
            dispatch(actions.setCityLocal(JSON.parse(window.localStorage.getItem("city"))));
        }
    }, [])

    return (
        <Grid container={true}>
            <Grid container={true} justifyContent="center" style={{ marginTop: "2%" }}>
                <Grid item >
                    <Typography variant="h4" color="primary">
                        Welcome to Favourite Page
                    </Typography>
                </Grid>
            </Grid>
            {isLocalStorage ? localStorageArrayCity.map((objLocal, index) => (
                <Grid item xs={4} sm={6} style={{ marginTop: "5%", justifyContent: "none", display: "flex" }}>
                    <FavouriteCity objLocal={objLocal} index={index} /> </Grid>
            )) : <Grid container style={{ justifyContent: "center", }}>
                <Grid item style={{ marginTop: "10%" }} sx={12} sm={6}>
                    <Typography>
                        <Message />
                    </Typography>
                </Grid>
            </Grid>}

        </Grid>
    )
}

export default Favourite
