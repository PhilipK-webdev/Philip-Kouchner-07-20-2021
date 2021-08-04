import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    link: {
        textDecoration: "none"
    },
    title: {
        fontSize: "20px",
        color: "white"
    },
    div: {
        marginBottom: "50%"
    }

});
function FavouritePage() {
    const classes = useStyles();
    return (
        <Link to="/favorite" className={classes.link}>
            <Grid item className={classes.div}>
                <Typography className={classes.title} >
                    Favorite
                </Typography>
            </Grid>
        </Link>
    )
}

export default FavouritePage
