import logo from './Resources/om-logo.svg';
import {isMobile} from "react-device-detect";
import {Paper , Grid} from "@material-ui/core";
import './App.css';

function App() {

  if (isMobile){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
      <Grid container
        direction="column"
        >
        <Paper><Grid item container
        direction="row"
        alignItems="center"
        style={{maxWidth: "100%"}}
        >
          <Grid item xs={4}><h1 style={{padding: "15px"}}>IT Labs</h1></Grid>
          <Grid item xs={4}><img src={logo} style={{height: "150px", display: "block", margin:"auto"}} alt="logo" /></Grid>
          <Grid item xs={4}><h1 style={{padding: "15px", float:"right"}}>Welcome, User</h1></Grid>
        </Grid></Paper>
        <Grid item><header className="App-header">
          <Grid container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center">
            <Grid item><img src={logo} className="App-logo" alt="logo" /></Grid>
            <Grid item><p>IT Labs, from the ground up.</p></Grid>
        </Grid></header></Grid>
      </Grid>
    );
  }


}

export default App;
