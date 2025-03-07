const mongoose = require('mongoose');

const trackerSchema = new mongoose.Schema({
  
    category: { 
      type: String,
      enum: [ 'food', 'transport', 'shopping', 'entertainment', 'others' ] },
    amount: { type: Number },
    date: { type: Date, default: Date.now },
    description: { type: String },
 
});

module.exports = mongoose.model('Tracker', trackerSchema);