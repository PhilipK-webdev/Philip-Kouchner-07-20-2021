import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 320,
        marginLeft: "13.5%",
    },
    media: {
        height: 140,
    },
});


function CurrentWeather(props) {
    const classes = useStyles();
    let component;
    if (props.objCurrentWeather.legth > 0) {
        component = (
            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.objCurrentWeather[1]}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Current City
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.objCurrentWeather[0]}
                        </Typography>
                        <Typography className={classes.typography}>
                            Metric: {props.objCurrentWeather[2]}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    } else {
        component = null;
    }
    return (
        <Grid item xs={12} sm={6}>
            {component}
        </Grid >
    )
}

export default CurrentWeather
