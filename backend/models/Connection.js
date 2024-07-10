const mongoose = require("mongoose");

const connectionSchema = new mongoose.Schema({
 
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
});

const Connection = mongoose.model("Connection", connectionSchema);

module.exports = Connection;