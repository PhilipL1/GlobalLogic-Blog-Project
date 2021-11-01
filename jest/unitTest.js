const fs = require("fs");

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

function checkblog2() {
  let secondBlogs = [];
  let file = fs.readFileSync("./articles/id_milestones.txt", "utf8");
  const snippet = file.substr(0, 90) + "...";
  secondBlogs.push({
    id: 2,
    snippet: snippet,
    title: "Milestones",
    author: "James",
    content: file,
  });
  return secondBlogs;
}

function checkblog3() {
  let thirdBlogs = [];
  let file = fs.readFileSync("./articles/id_teaching_code.txt", "utf8");
  const snippet = file.substr(0, 90) + "...";
  thirdBlogs.push({
    id: 3,
    snippet: snippet,
    title: "Teaching code",
    author: "Mike",
    content: file,
  });
  return thirdBlogs;
}

console.log(checkblog3());

module.exports = { checkblog, checkblog2, checkblog3 };
