import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import NavigationBar from "./components/Navigation/NavigationBar";
import { makeStyles } from '@material-ui/core/styles';
import "./App.css";
import Main from "./components/Main";
import Favourite from "./components/Favourite";
const useStyles = makeStyles({
  rootNav: {
    backgroundColor: "#306F8C",
  },
});

function App() {
  const classes = useStyles();
  return (

    <Provider store={store}>
      <Grid container="fluid" xs={12} className="App" >
        <Router>
          <Grid container className={classes.rootNav} xs={12}>
            <NavigationBar />
          </Grid>
          <Switch>
            <Redirect from="/Philip-Kouchner-07-20-2021" to="/" />
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/favorite">
              <Favourite />
            </Route>
          </Switch>
        </Router>
      </Grid>
    </Provider >
  );
}

export default App;
