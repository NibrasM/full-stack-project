const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const utils = require("./utils");

//  middleware - code runs in the middle - after req is recived, before response
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
//  req.body now will not be empty!
server.use(cors());

server.use((req, res, next) => {
  const { method, url } = req;
  console.log(`got req to utl: ${url} method: ${method}`);
  next();
});

// endpoints

// to do - all crud endpoints

// authentication endpoints
server.post("/signup", async (req, res) => {
  const data = req.body;
  console.log("data", data);

  const result = await utils.createUserHashed(data);
  if (result) {
    res.end(JSON.stringify({ msg: "user created successfully" }));
    return;
  }
  res.end(JSON.stringify({ msg: "user already exist" }));
  return;
});

// to do
server.post("/login", (req, res) => {});

server.listen(8181, () => {
  console.log("server listens on port 8181");
});
