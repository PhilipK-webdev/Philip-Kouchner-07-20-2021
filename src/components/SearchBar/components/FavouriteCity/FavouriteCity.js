import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Button, Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 320,
        marginLeft: "13.5%",
        marginTop: "10%"
    },
    media: {
        height: 50,
        width: 100,
        marginTop: "5%"
    },
    link: {
        textDecoration: "none"
    }

});

function FavouriteCity(props) {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.root} >
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom >
                            <strong> Current City:</strong><Typography>
                                {"adasdasd"}
                            </Typography>
                        </Typography>
                        <Typography >
                            <strong> Current Weather:</strong><Typography>
                                {"dasdaasdasd"}
                            </Typography>
                        </Typography>
                        <Typography className={classes.typography}>
                            <strong> Degree:</strong>adsdasdasd
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Button onClick={props.deleteCity}>Delete</Button>
            </Card>
        </Grid >
    )
}

export default FavouriteCity
