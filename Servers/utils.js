const fs = require("fs");
const bcrypt = require("bcrypt");
const path = require("path");

// with hashing
async function createUserHashed({ userName, password }) {
  const file = JSON.parse(
    fs.readFileSync(path.join(__dirname, "userData.json"))
  );

  const found = file.some((user) => user.userName === userName);

  if (!found) {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashedPassword", hashedPassword);
    file.push({ userName, password: hashedPassword });
    fs.writeFileSync(
      path.join(__dirname, "userData.json"),
      JSON.stringify(file)
    );
    return true;
  } else {
    return false;
  }
}

module.exports = { createUserHashed };
