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
function MainPage() {
    const classes = useStyles();
    return (
        <Link to="/" className={classes.link}>
            <Grid item className={classes.div}>
                <Typography className={classes.title}>
                    Main
                </Typography>
            </Grid>
        </Link>
    )
}

export default MainPage
