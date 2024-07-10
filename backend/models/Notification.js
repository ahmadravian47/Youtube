const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
 
  video: {
    type: String,
    required: true,
  },
  youtuber: {
    type: String,
    required: true,
  },
  editor: {
    type: String,
    required: true,
  },
  editor_name: {
    type: String,
    required: true,
  },
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;