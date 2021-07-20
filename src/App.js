import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/Navigation/NavigationBar";
import { makeStyles } from '@material-ui/core/styles';
import "./App.css";
const useStyles = makeStyles({
  rootNav: {
    backgroundColor: 'rgb(255, 135, 94)',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: "60px",
    marginTop: "2px"
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container >
        <Router>
          <Grid container className={classes.rootNav} >
            <NavigationBar />
          </Grid>
          <Switch>
            <Route exact path="/">
            </Route>
            <Route path="/favorite">
            </Route>
          </Switch>

        </Router>
      </Grid>
    </div>
  );
}

export default App;
