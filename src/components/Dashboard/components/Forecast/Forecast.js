import { Typography } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardContent } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        height: "90%",
        marginTop: "5%",

    },
    span: {
        color: "rgb(48, 111, 140)",
    }
});

function Forecast(props) {
    const classes = useStyles();
    const arrayHeadlines = ['Current Weather', 'Date', 'Min', 'Max'];
    return (

        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom component="h2">
                        {props.data.map((property, index) => (
                            <Typography key={index}>
                                <strong>{arrayHeadlines[index] + ":"}</strong>
                                {index == 0 ? <img src={property} width="75" height="45" key={index}></img> : <span key={index} className={classes.span}>{property}</span>}
                            </Typography>
                        ))}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Forecast



