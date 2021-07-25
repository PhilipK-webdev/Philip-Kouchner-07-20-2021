import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Button, Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
const useStyles = makeStyles({
    root: {
        maxWidth: 320,
        marginLeft: "13.5%",
    },
    media: {
        height: 50,
        width: 100,
        marginTop: "5%"
    },
    link: {
        textDecoration: "none"
    },
    icon: {
        marginRight: "5%",
        marginTop: "2%",
        color: "#ffee58"
    }

});

function CurrentWeather(props) {
    const classes = useStyles();
    const isToAddFavourite = useSelector(state => {
        return state.root.isToAddFavourite;
    });
    if (props.objCurrentWeather !== undefined) {
        return (
            <Grid item xs={12} sm={6}>

                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={props.objCurrentWeather[1]}
                            title="Icon-Current Weather"
                        />
                        <CardContent>
                            <Typography gutterBottom >
                                <strong> Current City:</strong><Typography>
                                    {props.objCurrentWeather[3]}
                                </Typography>
                            </Typography>
                            <Typography >
                                <strong> Current Weather:</strong><Typography>
                                    {props.objCurrentWeather[0]}
                                </Typography>
                            </Typography>
                            <Typography className={classes.typography}>
                                <strong> Degree:</strong> {props.objCurrentWeather[2]}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Grid item style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button onClick={props.addToFavorite} disabled={!isToAddFavourite ? false : true}>Add To Favorite</Button>
                        {isToAddFavourite ? <FavoriteIcon className={classes.icon} /> : null}
                    </Grid>
                </Card>

            </Grid >
        )
    }
}

export default CurrentWeather