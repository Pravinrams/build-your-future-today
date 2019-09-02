const express = require("express");
const db = require("./database/database");
const cors = require("cors"); // for doing axios call without problems
const bodyParser = require("body-parser"); // for have access to post request res.body
const helpers = require("./helperFunctions/helper");
const app = express();
app.use(cors());
app.use(bodyParser.json());

db.connect()
  .then(() => {
    console.log("Database connected");
  })
  .catch(err => {
    console.log("error connecting to db");
  });

app.get("/tasks", (req, res) => {
  const queryString = `select * from tasks;`;
  db.query(queryString)
    .then(data => {
      res.json(data.rows);
    })
    .catch(err => {
      res.sendStatus(400);
    });
});

app.post("/register", (req, res) => {
  console.log("registering users");
});

app.get("/goals", (req, res) => {
  const queryString = `select * from goals;`;
  db.query(queryString)
    .then(data => {
      res.json(data.rows);
    })
    .catch(err => {
      res.sendStatus(400);
    });
});

app.post("/createGoal", (req, res) => {
  const queryString = helpers.createGoalQuery(req.body);

  db.query(queryString)
    .then(result => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.sendStatus(400);
    });
});

app.post("/createTask", (req, res) => {
  const queryString = helpers.createTaskQuery(req.body);

  db.query(queryString)
    .then(result => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.sendStatus(400);
    });
});

app.listen(3000, () => {
  console.log("It's running");
});
