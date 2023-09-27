require("dotenv").config();
const express = require("express");
const app = express();

// importing routes
const SampleRoute = require("./routes/sample.route");

// including routes
app.use("/sample", SampleRoute);

// setting up the server to listen up on given port
app.listen(process.env.APP_PORT, (err) => {
  if (err) console.log("Some Error Occured", err);
  else console.log("Listening at: ", process.env.APP_PORT);
});
