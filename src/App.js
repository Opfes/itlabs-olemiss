import { Grid } from "@material-ui/core";
import {isMobile} from "react-device-detect";
import { ExitToApp } from "@material-ui/icons";
import './App.css';

function App() {

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
          
        </div>
      </div>
    );
  }


}

export default App;
