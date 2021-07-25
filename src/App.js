import { Box, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch as SwitchRouter, Redirect } from "react-router-dom";
import NavigationBar from "./components/Navigation/NavigationBar";
import { makeStyles } from '@material-ui/core/styles';
import Main from "./components/Main";
import Favourite from "./components/Favourite";
import React, { useState } from 'react'
import "./App.css";

const useStyles = makeStyles({
  rootNav: {
    backgroundColor: "#306F8C",
  },
  grey: {
    backgroundColor: "#e3e3e3",
    height: "170vh",
    overflowY: "hidden",
  },
  black: {
    backgroundColor: "black",
    height: "170vh",
  }
});

function App() {

  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="App" >
      <Box className={!checked ? classes.grey : classes.black} >
        <Grid item xs={12} >
          <Router>
            <Grid container className={classes.rootNav} >
              <NavigationBar handleChange={handleChange} checked={checked} />
            </Grid>
            <SwitchRouter>
              <Redirect from="/Philip-Kouchner-07-20-2021" to="/" />
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/favorite">
                <Favourite />
              </Route>
            </SwitchRouter>
          </Router>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
