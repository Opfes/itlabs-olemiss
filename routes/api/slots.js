// routes/api/slots.js

//This file has all of the calls to the database, the APIs if you will
//Doesn't really feel like it counts though
//Each collection needs a route type file like this, so if you have a new collection with a new schema, it needs a new route file
const express = require('express');
const router = express.Router();

// Load Slot model
const Slot = require('../../models/Slot');

//tester pull to see if the database is querying correctly
router.get('/test', (req, res) => res.send('slot route testing!'));

//This is an important exaple and shows how to set up queries with the ~API~
router.get('/:Day&:Hour&:Shift', (req, res) => {
  Slot.find({Day: Number(req.params.Day), Hour: Number(req.params.Hour), Shift: Number(req.params.Shift)})
    .then(slot => res.json(slot))
    .catch(err => res.status(404).json({ noslotfound: 'No Slot found' }));
});


module.exports = router;