import React, { useEffect, useState } from 'react';
import { Grid, Paper, makeStyles,  Button } from "@material-ui/core";
import {isMobile} from "react-device-detect";
import axios from 'axios';
import { ExitToApp} from "@material-ui/icons";
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
  const [nextSlot, setNextSlot] = useState({});
  const [slot, setSlot] = useState({});
  const [clock, setClock] = useState();

  useEffect(() => {
    getSchedule();

    const interval = setInterval(() =>{
      let today = new Date();
      let hours;
      
      //this next section formats the clock
      if (today.getHours() > 12){
        hours = today.getHours() - 12;
      } else {hours = today.getHours;}

      if(today.getMinutes() === 0){
        setClock(hours + ':' + "00");
      } else if (today.getMinutes() < 10) {
        setClock(hours + ':0' + today.getMinutes());
      } else {
        setClock(hours + ':' + today.getMinutes());
      }
      
      //this calls the reload every thirty minutes
      //I'd much prefer this to update the data instead of a full reload, but this works for now
      if (today.getMinutes() == 0){
        window.location.reload();
      } else if (today.getMinutes() == 30){
        window.location.reload();
      }
    }, 60000);
  },[]);

  function getSchedule() {
    var today = new Date();
    var thisShift = 0;
    let nextShift = 0;
    if (today.getMinutes() < 30){
        thisShift = 1;
    }else{
        thisShift = 2;
    }
    axios
      .get('http://130.74.129.58:8082/api/slots/'+today.getDay()+'&'+today.getHours()+'&'+thisShift)
      .then(res => {
        setSlot(res.data[0]);
      })
      .catch(err => {
        console.log("Error from ShowSlotDetails");
      })
    if (thisShift == 1) {
      nextShift = 2;
      axios
      .get('http://130.74.129.58:8082/api/slots/'+today.getDay()+'&'+today.getHours()+'&'+nextShift)
      .then(res => {
        setNextSlot(res.data[0]);
      })
      .catch(err => {
        console.log("Error from ShowSlotDetails");
      })
    } else if (thisShift == 2) {
      nextShift = 1;
      let nextHour = today.getHours() + 1;
      console.log("Next Hour: " + nextHour);
      axios
      .get('http://130.74.129.58:8082/api/slots/'+today.getDay()+'&'+nextHour+'&'+nextShift)
      .then(res => {
        setNextSlot(res.data[0]);
      })
      .catch(err => {
        console.log("Error from ShowSlotDetails");
      })
    }
  }

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
                    <Grid item xs={4}><p className="headerText">UM IT Labs</p></Grid>
                    <Grid item xs={4}><p className="clockText ">{clock}</p></Grid>
                    <Grid item xs={4} container
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
                                <Grid item><h1 style={{fontSize: 60}}><u>UMCT Schedule</u></h1></Grid>
                                <Grid item><h2 style={{fontSize: 44}}>Currently On:</h2><p style={{fontSize: 30}}>{slot.Names}</p></Grid><br /><br />
                                <Grid item><h2 style={{fontSize: 30}}>Next Shift:</h2><p style={{fontSize: 20}}>{nextSlot.Names}</p></Grid>
                                <Grid item><Link to="/dashboard" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary">Return</Button></Link></Grid>
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
