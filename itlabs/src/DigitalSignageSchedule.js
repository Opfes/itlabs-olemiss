import React, { useEffect, useState } from 'react';
import { Grid, Paper, makeStyles, TextField, Button } from "@material-ui/core";
import {isMobile} from "react-device-detect";
import axios from 'axios';
import { ExitToApp, SettingsCellOutlined } from "@material-ui/icons";
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
  const [nextworkers, setNextworkers] = useState();
  const [slot, setSlot] = useState({});

  useEffect(() => {
    var today = new Date();
    var thisShift = 0;
    let tempObjectHolder = {};
    if (today.getMinutes() < 30){
        thisShift = 1;
    }else{
        thisShift = 2;
    }
    axios
      .get('http://localhost:8082/api/slots/'+today.getDay()+'&'+today.getHours()+'&'+thisShift)
      .then(res => {
        //console.log("Print-showBookDetails-API-response: " + res.data[0]);
        setSlot(res.data[0]);
      })
      .catch(err => {
        console.log("Error from ShowSlotDetails");
      })
  },[]);

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
                                <Grid item><h2>Currently On:</h2><p>{slot.Names}</p></Grid>
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
