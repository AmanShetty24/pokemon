// Models/SearchHistory.js

const mongoose = require('mongoose');

const searchHistorySchema = new mongoose.Schema({
  query: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SearchHistory', searchHistorySchema);
