const fs = require("fs");

// const data = fs.readFileSync("read.txt", "utf8");
// console.log(data);
// console.log("After the data");

fs.readFile("read.txt", "utf8", (err, res) => {
  console.log(res);
});
console.log("After the data");
