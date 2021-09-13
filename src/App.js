import { Grid, Paper, makeStyles, TextField, Button } from "@material-ui/core";
import {isMobile} from "react-device-detect";
import logo from "./Resources/olemisslogo2.png";
import { ExitToApp } from "@material-ui/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from "./Landing.js";
import Dashboard from "./Dashboard.js";
import './App.css';

const useStyles = makeStyles({
  mainPaper: {
    color: "white",
    backgroundColor: "rgba(255,255,255, 0.8)",
    borderRadius: "20px",
    padding: "20px"
  }, // a style rule
});

function App() {
  const classes = useStyles();
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
