const express = require("express");
const app = express();
const port = 8181;
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
const users = [{ email: "dania@gmail.com", pass: "1234", id: 1 }];
app.get("/", (req, res) => {
  //   const { email, pass } = req.body;
  //   console.log({ email: email, pass: pass });
  res.send(users);
});
app.post("/", (req, res) => {
  const { email, pass } = req.body;
  users.push({ email: email, pass: pass });
  res.send(users);
  console.log(users);
});

app.post("/api/my-endpoint", (req, res) => {
  console.log("get record ");
  const message = req.body.message;
  console.log(message); // "Hello server!"
  res.end("Thanks for your message!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
