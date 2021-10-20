const http = require("http");
const fs = require("fs");
const requests = require("requests");

const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
  temperature = temperature.replace("{%mintemp%}", orgVal.main.temp_min);
  temperature = temperature.replace("{%maxtemp%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%mintemp%}", orgVal.main.temp_min);
  temperature = temperature.replace("{%city%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  return temperature;
};

const homeFile = fs.readFileSync("home.html", "utf8");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=metric&appid=b606f9db39d148829c9500a2651c63dd"
    )
      .on("data", function (chunk) {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        const realTimeData = arrData
          .map((val) => replaceVal(homeFile, val))
          .join("");
        res.write(realTimeData);
      })
      .on("end", function (err) {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
  }
});

server.listen(8000, "127.0.0.1");
