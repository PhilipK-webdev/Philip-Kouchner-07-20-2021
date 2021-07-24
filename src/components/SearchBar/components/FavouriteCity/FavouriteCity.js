import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Button, Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../redux/actions';

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
    const localStorageArrayCity = useSelector(state => {
        return state.root.localStorageArrayCity;
    });
    const dispatch = useDispatch();
    const deleteCity = (e) => {
        e.preventDefault();
        const idToDelete = parseInt(e.target.attributes.getNamedItem("data-id").value);
        dispatch(actions.setCityLocal([...localStorageArrayCity.slice(idToDelete, 1)]));
    }
    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom >
                            <strong> Current City:</strong><Typography>
                                {props.objLocal.name}
                            </Typography>
                        </Typography>
                        <Typography >
                            <strong> Current Weather:</strong><Typography>
                                {props.objLocal.weather}
                            </Typography>
                        </Typography>
                        <Typography className={classes.typography}>
                            <strong> Degree:</strong>
                            {props.objLocal.tempture}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <button onClick={deleteCity} data-id={props.index}>Delete</button>
                <Link to="/" className={classes.link}>
                    <button data-id={props.objLocal.ID}>Main</button>
                </Link>
            </Card>
        </Grid >
    )
}

export default FavouriteCity
