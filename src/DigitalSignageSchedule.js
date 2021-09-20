import React, { useState } from 'react';
import { Grid, Paper, makeStyles, TextField, Button } from "@material-ui/core";
import {isMobile} from "react-device-detect";
import logo from "./Resources/olemisslogo2.png";
import { ExitToApp } from "@material-ui/icons";
import {Link} from "react-router-dom";
import './App.css';

const useStyles = makeStyles({
  mainPaper: {
    color: "white",
    backgroundColor: "rgba(255,255,255, 0.8)",
    borderRadius: "20px",
    padding: "20px"
  }, // a style rule
});

function DigitalSignageSchedule() {
  const classes = useStyles();
  const mysql = require('mysql2');
  const [workers,setWorkers] = useState();
  const [nextworkers, setNextworkers] = useState();
  const dayObject = new Date();
  var shift = 1;

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ju57tru5tm3##',
    database: 'umcttest'
  });

  function refreshContent() {
    if (dayObject.getMinutes() < 30) {
      shift = 1;
    } else {
      shift = 2;
    }
    connection.execute(
      'SELECT `Names` FROM `schedule` WHERE `Day` = ? AND `Hour` = ? AND `Shift` = ?',
      [dayObject.getDay(), dayObject.getHours(), shift],
      function(err, results) {
        setWorkers(results);
      }
    );
  }

  refreshContent();

  if (isMobile){
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" /> */}
          <p>Page not availible on Mobile</p>
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
                    <Grid item xs={9}>
                        <Paper className={classes.mainPaper}>
                            <div className="mainPaper-override">
                                <Grid item><h1>UMCT Schedule</h1></Grid>
                                <Grid item><h2>Currently On:<br />{workers}</h2></Grid>
                                <Grid item><h2>Next Shift:</h2></Grid>
                                <Grid item><Link to="/dashboard"><Button variant="contained" color="primary">Return</Button></Link></Grid>
                            </div>                  
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
  }
}

export default DigitalSignageSchedule;
