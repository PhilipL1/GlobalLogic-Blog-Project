const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const fs = require("fs");
const { homedir } = require("os");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
// app.use(express.static("./public"));

let allBlogs = [];

const content = fs.readFileSync("./articles/id_IDC.txt", "utf8");
const snippet = content.substr(0, 90) + "...";
allBlogs.push({
  id: 1,
  snippet: snippet,
  title: "IDC",
  author: "Philip",
  content: content,
});

const content2 = fs.readFileSync("./articles/id_milestones.txt", "utf8");
const snippet2 = content2.substr(0, 90) + "...";
allBlogs.push({
  id: 2,
  snippet: snippet2,
  title: "Milestones",
  author: "James",
  content: content2,
});

const content3 = fs.readFileSync("./articles/id_teaching_code.txt", "utf8");
const snippet3 = content3.substr(0, 90) + "...";
allBlogs.push({
  id: 3,
  snippet: snippet3,
  title: "Teaching code",
  author: "Mike",
  content: content3,
});

// console.log(allBlogs);

app.get("/", (req, res) => {
  //style = { style: "home.css" };
  res.render("home", allBlogs);
});

app.get("/new/:id", (req, res) => {
  const id = req.params.id; //express
  let found = allBlogs.find((element) => element.id == id);
  res.render("new", found);
});

app.listen(8000, () => {
  console.log("Server is starting at port wait.. ", 8000);
});
