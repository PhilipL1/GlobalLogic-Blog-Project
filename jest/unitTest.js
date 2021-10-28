const fs = require("fs");

// function checkUser() {
//   const user = { firstName: "IDC" };
//   return user;
// }

function checkblog() {
  let firstBlogs = [];
  let file = fs.readFileSync("./articles/id_IDC.txt", "utf8");
  const snippet = file.substr(0, 90) + "...";
  firstBlogs.push({
    id: 1,
    snippet: snippet,
    title: "IDC",
    author: "Philip",
    content: file,
  });
  return firstBlogs;
}

module.exports = { checkblog };
