import { Typography } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardContent } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        height: "85%",
        marginTop: "5%",

    },
    span: {
        color: "rgb(48, 111, 140)",
    }
});

function Forecast(props) {
    const classes = useStyles();
    const arrayHeadlines = ['Current Weather', 'Date', 'Degree'];
    function isURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return pattern.test(str);
    }
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom component="h2">
                        {props.data.map((property, index) => (
                            <Typography key={property}>
                                <strong>{arrayHeadlines[index] + ":"}</strong>
                                {isURL(property) ? <img src={property} width="75" height="45"></img> : <span className={classes.span}>{property}</span>}
                            </Typography>
                        ))}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Forecast



