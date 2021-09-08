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
        direction="column">
        <Grid item><Paper>
          <img src={logo} alt="logo" />
        </Paper></Grid>
        <Grid item><header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>You're not on mobile!</p>
        </header></Grid>
      </Grid>
    );
  }


}

export default App;
