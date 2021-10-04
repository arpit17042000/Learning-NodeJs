const fs = require("fs");
// fs.writeFileSync("readme.txt","I am learning node js");//for creating a new file
// fs.writeFileSync("readme.txt", "I am learning node js and i am liking it");// deletes all the contents
// fs.appendFileSync(
//   "readme.txt",
//   "I am currently react also aspiring to be a full stack developer"
// ); // to appending new content
// const buff_data = fs.readFileSync("readme.txt");
// console.log(buff_data.toString());
// to rename a file
// fs.renameSync("readme.txt", "readwrite.txt");

//Challenge
// creating a folder
const path = require("path");
const folderName = "thapa";
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}
fs.writeFileSync("thapa/bio.txt", "Hi i am Arpit Prasad"); // creating a file in the folder
fs.appendFileSync("thapa/bio.txt", " I am 21 years old"); // appending more data in the file
console.log(fs.readFileSync("thapa/bio.txt").toString());
fs.renameSync("thapa/bio.txt", "thapa/mybio.txt");
fs.unlink("thapa/mybio.txt", () => {
  console.log("Yay!");
});
const pathToDir = path.join(__dirname, "thapa");
fs.rmdir(pathToDir,()=>{
    console.log("yay2!")
})
