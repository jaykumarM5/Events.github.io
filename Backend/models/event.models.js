const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  event: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("event", EventSchema);
