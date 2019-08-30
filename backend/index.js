const express = require("express");
const db = require("./database/database");
const cors = require("cors"); // for doing axios call without problems
const bodyParser = require("body-parser"); // for have access to post request res.body
const helpers = require('./helperFunctions/helper');
const app = express();
app.use(cors());
app.use(bodyParser.json());

db.connect()
  .then(() => {
    console.log("Database connected");
    db.query("select * from goals", (err, res) => {
      console.log(res.rows);
      db.end();
    });
  })
  .catch(err => {
    console.log("error connecting to db");
  });

app.get("/tasks", (req, res) => {
  res.send("will send tasks");
});

app.post("/register", (req, res) => {
    console.log("registering users")
});

app.get("/goals", (req, res) => {
  res.send("will send goals");
});

app.post("/createGoal", (req, res) => {
  console.log("creating goals");
});

app.post("/createTask", (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("It's running");
});
