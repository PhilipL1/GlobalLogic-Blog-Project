const { readFile } = require("fs");
const fs = require("fs/promises");


function checkUser() {
  const user = { firstName: "IDC" };
  return user;
}



function checkblog() { 
    fs.readFile("./articles/id_IDC.txt", "utf8").then((content) => {
        const snippet = content.substr(0, 90) + "...";
        blogs = {
        id: 1,
        snippet: snippet,
        title: "IDC",
        author: "Philip",
        content: content,
        };
        return blogs; 
    },
    return readFile()
};

module.exports = { checkUser, checkblog};