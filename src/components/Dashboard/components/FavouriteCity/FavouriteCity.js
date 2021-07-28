import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../../../redux/actions';
import styles from "./Styles/mystyle.module.css";
const useStyles = makeStyles({
    root: {
        width: "fit-content",
        marginTop: "10%",
    },
    link: {
        textDecoration: "none"
    },
    btnsGrid: {
        display: "flex",
        justifyContent: "center"
    },
    btn: {
        marginLeft: "2%",
    },
    headline: {
        fontSize: "20px",
        fontFamily: "serif"
    },
    typography: {
        fontFamily: "serif",
        fontSize: "17px"
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
        window.localStorage.setItem("city", JSON.stringify(arrTemp));
        dispatch(actions.setCityLocal([...arrTemp]));
    }
    const setCity = () => {
        dispatch(actions.setCurrentSearchCity(props.objLocal.name));
        dispatch(actions.setKeySearch(props.objLocal.ID));
        dispatch(actions.setIsToAddFavourite(false));
    }
    return (

        <Grid item xs={12} sm={6}>
            <Card className={classes.root}  >
                <CardActionArea>
                    <CardContent >
                        <Typography gutterBottom className={classes.headline} >
                            <strong> Current City:</strong>
                            <Typography >
                                {props.objLocal.name}
                            </Typography>
                        </Typography>
                        <Typography className={classes.typography}>
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
                    <button onClick={deleteCity} className={styles.button4} data-id={props.index}>Delete</button>
                    <Link to="/" className={classes.link} >
                        <button onClick={setCity} className={styles.button5}>Main Page</button>
                    </Link>
                </Grid>
            </Card>
        </Grid>
    )
}

export default FavouriteCity
