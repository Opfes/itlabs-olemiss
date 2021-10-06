import React, { useState } from 'react';
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
      const [showCTCard, setShowCTCard] = useState(true);
      const [showHDCard, setShowHDCard] = useState(true);
      const [showDLCard, setShowDLCard] = useState(true);
      const [showFTDCCard, setShowFTDCCard] = useState(true);
      const [CTCardWidth, setCTCardWidth] = useState(4);
      const [HDCardWidth, setHDCardWidth] = useState(4);
      const [DLCardWidth, setDLCardWidth] = useState(4);
      const [FTDCCardWidth, setFTDCCardWidth] = useState(4);

      function expandCards(card) {
        if (card === "CT") {
          setShowHDCard(false);
          setShowDLCard(false);
          setShowFTDCCard(false);
          setCTCardWidth(11);
        } else if (card === "HD") {
          setShowCTCard(false);
          setShowDLCard(false);
          setShowFTDCCard(false);
          setHDCardWidth(11);
        } else if (card ==="DL") {
          setShowHDCard(false);
          setShowCTCard(false);
          setShowFTDCCard(false);
          setDLCardWidth(11);
        } else if (card === "FTDC") {
          setShowHDCard(false);
          setShowDLCard(false);
          setShowCTCard(false);
          setFTDCCardWidth(11);
        }
      };

      function resetCards() {
        setShowCTCard(true);
        setShowHDCard(true);
        setShowDLCard(true);
        setShowFTDCCard(true);
        setCTCardWidth(4);
        setHDCardWidth(4);
        setDLCardWidth(4);
        setFTDCCardWidth(4);
      }

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
                    { showCTCard ? <Grid item id='CTCard' xs={CTCardWidth}>
                      <Paper className={classes.mainPaper}>
                        <Grid container direction="column" spacing={1}>
                          <Grid item><h1>Classroom<br/>Technology</h1></Grid>
                          <Grid item><Button variant="contained" color="primary"><Link style={{ textDecoration: 'none', color: "white" }} to="/signageschedule">View Schedule</Link></Button></Grid>
                          { showDLCard ? <Grid item><Button variant="contained" color="primary"onClick={() => expandCards("CT")}>Expand</Button></Grid>
                           : <Grid item><Button variant="contained" color="primary"onClick={() => resetCards()}>Cancel</Button></Grid>}
                        </Grid>
                      </Paper>
                    </Grid> : null}
                    { showHDCard ? <Grid item id='HDCard' xs={HDCardWidth}>
                      <Paper className={classes.mainPaper}>
                        <Grid container direction="column" spacing={1}>
                          <Grid item><h1>Helpdesk</h1></Grid>
                          { showCTCard ? <Grid item><Button variant="contained" color="primary" onClick={() =>  expandCards("HD")}>Expand</Button></Grid>
                           : <Grid item><Button variant="contained" color="primary"onClick={() => resetCards()}>Cancel</Button></Grid>}
                        </Grid>        
                      </Paper>
                    </Grid> : null }
                    { showDLCard ? <Grid item id='DLCard' xs={DLCardWidth}>
                      <Paper className={classes.mainPaper}>
                        <Grid container direction="column" spacing={1}>
                          <Grid item><h1>Distance<br/>Learning</h1></Grid>
                          { showCTCard ? <Grid item><Button variant="contained" color="primary" onClick={() => expandCards("DL")}>Expand</Button></Grid>
                           : <Grid item><Button variant="contained" color="primary"onClick={() => resetCards()}>Cancel</Button></Grid>}
                        </Grid>                 
                      </Paper>
                    </Grid> : null }
                    { showFTDCCard ? <Grid item id='FTDCCard' xs={FTDCCardWidth}>
                      <Paper className={classes.mainPaper}>
                        <Grid container direction="column" spacing={1}>
                          <Grid item><h1>FTDC</h1></Grid> 
                          { showCTCard ? <Grid item><Button variant="contained" color="primary" onClick={() => expandCards("FTDC")}>Expand</Button></Grid>
                           : <Grid item><Button variant="contained" color="primary"onClick={() => resetCards()}>Cancel</Button></Grid>}
                        </Grid>                   
                      </Paper>
                    </Grid> : null }
                </Grid>
              </div>
            </div>
          );          
      }
  }

  export default Dashboard;