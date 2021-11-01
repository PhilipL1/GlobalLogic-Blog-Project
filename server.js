const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const fs = require("fs");
const { homedir } = require("os");

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
  res.render("home", { allBlogs });
});

app.get("/new/:id", (req, res) => {
  const id = req.params.id; //express
  let found = allBlogs.find((element) => element.id == id);
  res.render("new", found);
});

app.engine("handlebars", exphbs()); //evoke express as a function
app.set("view engine", "handlebars");

app.listen(8000, () => {
  console.log("Server is starting at port wait.. ", 8000);
});

//console.log(allBlogs);
// app.get("/create", (req, res) => {
//   const article = new Article({
//     title: req.body.title,
//     description: req.body.description,
//     markdown: req.body.markdown,
//   });
//   res.render("create", article);
// });

// app.post("/", async (req, res) => {
//   const article = new Article({
//     title: req.body.title,
//     description: req.body.description,
//     markdown: req.body.markdown,
//   });
//   try {
//     article = await article.save(); //async function
//     res.redirect(`./${article.id}`);
//   } catch (e) {
//     res.render("./create", { article: article });
//   }
// });
