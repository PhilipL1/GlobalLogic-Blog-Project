/* eslint-disable no-unused-vars */
module.exports = unitTest;

//console.log(blogTest2());et
console.log(blogTest());
// let blogs = {};
let blogs2 = [];
let blogs3 = [];

function blogTest() {
  let blogs = {
    id: 1,
    title: "IDC",
    author: "Philip",
  };
  return blogs;
}

// function blogTest2() {
//   fs.readFile("./articles/id_IDC.txt", "utf8").then((content) => {
//     const snippet = content.substr(0, 90) + "...";
//     blogs2 = {
//       id: 1,
//       snippet: snippet,
//       title: "IDC",
//       author: "Philip",
//       content: content,
//     };
//   });
//   return blogs2;
// }
