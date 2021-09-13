import { Grid, Paper, makeStyles, TextField, Button } from "@material-ui/core";
import {isMobile} from "react-device-detect";
import logo from "./Resources/olemisslogo2.png";
import { ExitToApp } from "@material-ui/icons";
import './App.css';

const useStyles = makeStyles({
  mainPaper: {
    color: "white",
    backgroundColor: "rgba(255,255,255, 0.8)",
    borderRadius: "20px",
    padding: "20px"
  }, // a style rule
});

function Landing() {
  const classes = useStyles();
  if (isMobile){
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" /> */}
          <p>You're on mobile!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header>
          <Grid container
          justifyContent='space-between'
          alignItems="center"
          wrap="nowrap"
          >
            <Grid item xs={6}><p className="headerText">UM IT Labs</p></Grid>
            <Grid item xs={6} container
              alignItems="center"
              justifyContent="flex-end"
              style={{paddingRight:15}}>
              <Grid item><p className="headerText">Hi, User</p></Grid>
              <Grid item><ExitToApp fontSize="large" /></Grid>
            </Grid>
          </Grid>
        </header>
        <div className="appBody">
          <Grid container
            justifyContent="center">
              <Grid item xs={4}>
                <Paper className={classes.mainPaper}>
                  <div className="mainPaper-override">
                    <img src={logo} style={{height: "300px"}} alt="Ole Miss Logo"></img>
                    <form noValidate autoComplete="off"><Grid container direction="column" spacing={3}>
                      <Grid item><TextField label="WebID"/></Grid>
                      <Grid item><TextField label="Password"/></Grid>
                      <Grid item><Button variant="contained" color="primary">Log in</Button></Grid>
                    </Grid></form>
                  </div>                  
                </Paper>
              </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Landing;
