//this crap is just the schema definition for schedule slots
//this will be useful when expanding on other database connections
const mongoose = require('mongoose');

const SlotSchema = new mongoose.Schema({
  Day: {
    type: Number,
    required: true
  },
  Hour: {
    type: Number,
    required: true
  },
  Shift: {
    type: Number,
    required: true
  },
  Names: {
    type: String,
    required: true
  }, 
},{ collection : 'schedule' });

//I need to figure out what exactly these exports do
//Database stuff is confusing, make it easy with mongoose lol
//Seriously though, look up the docs, it'll be super helpful
module.exports = Slot = mongoose.model('slot', SlotSchema);