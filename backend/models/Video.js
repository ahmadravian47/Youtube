const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
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
  video: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;