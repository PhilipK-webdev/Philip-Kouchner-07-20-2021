import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";
function FavoritePage() {
    return (
        <Link to="/favorite" style={{ textDecoration: "none" }}>
            <Grid item>
                <Typography style={{ fontSize: "20px", color: "white" }} >
                    Favorite
                </Typography>
            </Grid>
        </Link>
    )
}

export default FavoritePage
