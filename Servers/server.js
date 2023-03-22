const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const utils = require("./utils");

const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//  middleware - code runs in the middle - after req is recived, before response
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
//  req.body now will not be empty!
server.use(cors({ origin: "localhost:8181", credentials: true }));

server.use(cookieParser());

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
server.post("/login", async (req, res) => {
  const { userName, password } = req.body;

  const file = JSON.parse(
    fs.readFileSync(path.join(__dirname, "userData.json"))
  );

  const found = file.some((user) => user.userName === userName);

  if (!found) {
    console.log("user not found");
    res.end("false");
    return;
  }
  const passCompResult = await bcrypt.compare(password, found.password);
  if (passCompResult) {
    const token = jwt.sign({ type: "Admin" }, "my secret key", {
      expiresIn: "1h",
    });
    console.log("yes you are here ");
    res.cookie("token", token);
    res.end("true");
    return;
  }
});

server.listen(8181, () => {
  console.log("server listens on port 8181");
});
