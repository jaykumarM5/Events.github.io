const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const eventRoute = require("./routes/event.routes");

mongoose
  .connect(
    "mongodb+srv://jaykumar:0LbRXr944bfbNBpW@sl1.nxiyc.mongodb.net/tododb?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to database successfully"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use(eventRoute);

const PORT = 3000;

app.listen(PORT, console.log(`Server started at port: ${PORT}`));
