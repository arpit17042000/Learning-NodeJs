const fs=require('fs');
const bioData = {
  name: "arpit",
  age: 100,
  dept: "why do u care",
};

// const json = JSON.stringify(bioData);
// console.log(json);// obj to json
// const dataObj=JSON.parse(json);
// console.log(dataObj);//json to obj

// const jsonData=JSON.stringify(bioData);
// fs.writeFile('json1.json',jsonData,(err)=>{
//     console.log("Done");
// })

fs.readFile('json1.json','utf-8',(err,data)=>{
    console.log(data);
    console.log(JSON.parse(data));
})