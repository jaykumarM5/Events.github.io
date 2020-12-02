const route = require("express").Router();

const Event = require("../models/event.models");

route.get("/event",async (req, res) => {
  try {
    const foundEvent = await Event.find();
    res.json(foundEvent);
  } catch (err) {
    console.log(err)
  }

});



route.post("/event", async (req, res) => {
  const event = req.body.event;
  const eventItem = new Event({
    event: event
  })
  try {
    const savedEvent = await eventItem.save();
    res.json(savedEvent);
  } catch (err) {
    console.log(err);
  }

});



route.delete("/event/:id",async (req, res) => {
  const eventId = req.params.id
  try {
    const deletedItem = await Event.deleteOne({_id: eventId});
    res.json(deletedItem);
  } catch (err) {
    console.log(err)
  }
});

module.exports = route;
