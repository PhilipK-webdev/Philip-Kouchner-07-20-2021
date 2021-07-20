import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";
function Favorite() {
    return (
        <Link to="/favorite" style={{ textDecoration: "none" }}>
            <Grid item>
                <Typography style={{ fontSize: "20px", color: "black" }} >
                    Favorite
                </Typography>
            </Grid>
        </Link>
    )
}

export default Favorite
