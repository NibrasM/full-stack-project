const express = require("express");
const fs = require("fs");
//to conver to json
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8181;

//app.use always excuted as steps
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/persons", (req, res) => {
  const users = JSON.parse(fs.readFileSync(__dirname + "\\" + "persons.json"));
  res.send(users);
});

app.post("/persons", (req, res) => {
  const { email, pass } = req.body;

  const users = JSON.parse(fs.readFileSync(__dirname + "\\" + "persons.json"));

  users.push({ email: email, pass: pass });

  fs.writeFileSync(__dirname + "\\" + "persons.json", JSON.stringify(users));
  res.send(users);
});

app.delete("/persons", (req, res) => {
  const users = JSON.parse(fs.readFileSync(__dirname + "\\" + "persons.json"));

  const deletedUser = users.shift();

  fs.writeFileSync(__dirname + "\\" + "persons.json", JSON.stringify(users));

  res.send(deletedUser);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
