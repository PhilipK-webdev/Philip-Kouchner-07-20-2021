import React, { useEffect, useState } from 'react'
import FavouriteCity from './SearchBar/components/FavouriteCity/FavouriteCity';
import { Grid, Typography } from '@material-ui/core';

function Favourite() {

    const [objLocalStorage, setObjLocalStorage] = useState([]);
    const [isLocalStorage, setIsLocalStorage] = useState(false);

    useEffect(() => {
        if (localStorage.length > 0) {
            setObjLocalStorage(JSON.parse(window.localStorage.getItem("city")));
            setIsLocalStorage(true);
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
            <Grid item xs={4} sm={4} style={{ marginTop: "5%", justifyContent: "none" }}>
                {isLocalStorage ? <FavouriteCity objLocalStorage={objLocalStorage} /> : <h1>LOADING ...</h1>}
            </Grid>
        </Grid>
    )
}

export default Favourite
