const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
 
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;