import logo from './Resources/olemisslogo2.png';
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
      <body>
        <header className="itlabs-header">
          <h1 style={{padding: "15px"}}>IT Labs</h1>
          <img src={logo} style={{height: "100px", display: "block", margin:"-5px", alignSelf:"center"}} alt="logo" />
          <h1 style={{padding: "15px", float:"right"}}>Welcome, User</h1>
        </header>
        <header className="App-header"><Grid container
        direction="column"
        >
        <Grid item>
          <Grid container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center">
            <Grid item><img src={logo} className="App-logo" alt="logo" /></Grid>
            <Grid item><p>IT Labs, from the ground up.</p></Grid>
          </Grid></Grid>
        </Grid></header>
      </body>
      
      
    );
  }


}

export default App;
