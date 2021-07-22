import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";
function MainPage() {
    return (
        <Link to="/" style={{ textDecoration: "none" }}>
            <Grid item>
                <Typography style={{ fontSize: "20px", color: "white" }}>
                    Main
                </Typography>
            </Grid>
        </Link>
    )
}

export default MainPage
