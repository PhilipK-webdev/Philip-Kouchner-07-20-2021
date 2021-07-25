import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch as SwitchRouter, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import NavigationBar from "./components/Navigation/NavigationBar";
import { makeStyles } from '@material-ui/core/styles';
import Main from "./components/Main";
import Favourite from "./components/Favourite";

import React, { useState } from 'react'
import "./App.css"

const useStyles = makeStyles({
  rootNav: {
    backgroundColor: "#306F8C",
  },
  grey: {
    backgroundColor: "#e3e3e3",
    height: "100vh",
  },
  black: {
    backgroundColor: "black",
    height: "100vh",
  }
});

function App() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="App">
      <div className={!checked ? classes.grey : classes.black}>
        <Provider store={store}>
          <Grid item xs={12}>
            <Router>
              <Grid container className={classes.rootNav} xs={12}>

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
        </Provider >
      </div>
    </div>


  );
}

export default App;
