const mongoose = require("mongoose");

const testtSchema = new mongoose.Schema({
 
  value: {
    type: String,
    required: true,
  },
});

const Test = mongoose.model("Test", testtSchema);

module.exports = Test;