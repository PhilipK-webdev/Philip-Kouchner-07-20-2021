import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',

        '& > * + *': {
            marginTop: theme.spacing(2),
        },

    },
    button: {
        backgroundColor: "#2196F3",
        '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
        }
    },
    message: {
        '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
        }
    }
}));
function Message() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Button variant="outlined" onClick={handleClick} className={classes.button}>
                Open Notification
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Please add to favourite.
                    On the Main page you have a Button named:
                    Add To Favourite
                    Enjoy
                </Alert>
            </Snackbar>
            <Alert severity="info" className={classes.message}>This is an information message! </Alert>

        </div>
    );
}

export default Message
