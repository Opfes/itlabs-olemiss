import { Grid, Paper, makeStyles, TextField, Button, Icon } from "@material-ui/core";
import {isMobile} from "react-device-detect";
import logo from "./Resources/olemisslogo2.png";
import { ExitToApp } from "@material-ui/icons";
import {Link} from "react-router-dom";
import './App.css';

const useStyles = makeStyles({
    mainPaper: {
      color: "black",
      backgroundColor: "rgba(255,255,255, 0.8)",
      //borderRadius: "20px",
      padding: "20px"
    }, // a style rule
  });

  function Dashboard() {
      const classes = useStyles();
      if(isMobile){
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
      } else {
        return (
            <div className="App">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
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
                    <Grid item><Link style={{ textDecoration: 'none', color:'black' }} to="/"><ExitToApp fontSize="large" /></Link></Grid>
                  </Grid>
                </Grid>
              </header>
              <div className="appBody">
                <Grid container
                  justifyContent="center"
                  justify="space-around"
                  spacing={2}
                  >
                    <Grid item id='CTCard' xs={4}>
                      <Paper className={classes.mainPaper}>
                          <Grid container direction="column" spacing={1}>
                            <Grid item><h1>Classroom<br/>Technology</h1></Grid>
                            <Grid item><Button variant="contained" color="primary"><Link style={{ textDecoration: 'none', color: "white" }} to="/signageschedule">Schedule</Link></Button></Grid>
                            <Grid item><Button variant="contained" color="primary">Expand</Button></Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                    <Grid item id='HDCard' xs={4}>
                      <Paper className={classes.mainPaper}>
                        <h1>Helpdesk</h1>
                        <Grid item><Button variant="contained" color="primary">Expand</Button></Grid>        
                      </Paper>
                    </Grid>
                    <Grid item id='DLCard' xs={4}>
                      <Paper className={classes.mainPaper}>
                        <h1>Distance<br/>Learning</h1>
                        <Button variant="contained" color="primary">Expand</Button>                
                      </Paper>
                    </Grid>
                    <Grid item id='FTDCCard' xs={4}>
                      <Paper className={classes.mainPaper}>
                        <h1>FTDC</h1> 
                        <Button variant="contained" color="primary">Expand</Button>                
                      </Paper>
                    </Grid>
                </Grid>
              </div>
            </div>
          );          
      }
  }

  export default Dashboard;