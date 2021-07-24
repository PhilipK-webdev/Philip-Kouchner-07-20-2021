import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Button, Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
    },
    btnsGrid: {
        display: "flex",
        justifyContent: "center"
    },
    btn: {
        marginLeft: "2%"
    }

});

function FavouriteCity(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const deleteCity = (e) => {
        e.preventDefault();
        const idToDelete = parseInt(e.target.attributes.getNamedItem("data-id").value);
        let arrTemp = JSON.parse(window.localStorage.getItem("city"));
        arrTemp.splice(idToDelete, 1);
        localStorage.clear();
        window.localStorage.setItem("city", JSON.stringify(arrTemp));
        dispatch(actions.setCityLocal([...arrTemp]));
    }

    const setCity = () => {
        dispatch(actions.setCurrentSearchCity(props.objLocal.name));
    }
    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom style={{ textAlign: "center" }} >
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
                            <Typography>
                                {props.objLocal.tempture}
                            </Typography>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Grid item className={classes.btnsGrid}>
                    <button onClick={deleteCity} data-id={props.index} className={classes.btn}>Delete</button>
                    <Link to="/" className={classes.link}>
                        <Button onClick={setCity}>Main</Button>
                    </Link>
                </Grid>
            </Card>
        </Grid >
    )
}

export default FavouriteCity
