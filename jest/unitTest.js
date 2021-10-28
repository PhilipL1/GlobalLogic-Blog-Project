const fs = require("fs");

function checkUser() {
  const user = { firstName: "IDC" };
  return user;
}

function checkblog() {
  let file = fs.readFileSync("../articles/id_IDC.txt", "utf8");
  return file;
}
console.log(checkblog());

module.exports = { checkUser, checkblog };
