// routes/api/slots.js

const express = require('express');
const router = express.Router();

// Load Slot model
const Slot = require('../../models/Slot');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('slot route testing!'));

// @route READ database for current shift
//Query database by day, hour, and shift
// @access Public
router.get('/:Day&:Hour&:Shift', (req, res) => {
  Slot.find({Day: Number(req.params.Day), Hour: Number(req.params.Hour), Shift: Number(req.params.Shift)})
    .then(slot => res.json(slot))
    .catch(err => res.status(404).json({ noslotfound: 'No Slot found' }));
});

// @route GET api/books
// @description add/save book
// @access Public


module.exports = router;