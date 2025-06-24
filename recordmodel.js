// recordModel.js
const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  name: String,
  email: String,
  project: String,
  date: String,
  approval: {
    type: String,
    default: 'Pending'
  }
});

module.exports = mongoose.model('Record', recordSchema);
