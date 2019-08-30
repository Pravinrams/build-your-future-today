const express = require("express");
const cors = require("cors"); // for doing axios call without problems
const bodyParser = require("body-parser"); // for have access to post request res.body

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/tasks", (req, res) => {
  res.send("will send tasks");
});

app.get("/goals", (req, res) => {
  res.send("will send goals");
});

app.listen(3000, () => {
  console.log("It's running");
});
