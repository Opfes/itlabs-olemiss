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

module.exports = Slot = mongoose.model('slot', SlotSchema);