import { Grid, Typography } from '@material-ui/core'
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
});

function Forecast(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom component="h2">
                        {props.data.map(property => (
                            <Typography>
                                {property}
                            </Typography>
                        ))}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Forecast



