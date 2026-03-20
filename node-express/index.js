const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
// const coronaData = require("./coronaData.json"); // example4
const activities = require("./activities.json");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/", function (req, res) {
  // res.send("Hello"); // example1
  // res.send("<h1>Hello</h1>"); // example2
  // res.send({ name: "hiraoka", age: "45" }); // example3
  // res.send(coronaData); // example4
  // console.log("__dirnameの中身", __dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/autumn", function (req, res) {
  // console.log("POSTリクエストの動作確認"); // example5
  // console.log("reqの中身", req); // example6
  // console.log("req.bodyの中身", req.body); // example7
  fs.writeFile(__dirname + "/data.txt", req.body.activity, function () {
    res.send("POST Done!!");
  });
});

app.post("/update", function (req, res) {
  activities[0].activity = req.body.updatedActivity;
  res.send(activities);
});

app.post("/delete", function (req, res) {
  activities.splice(req.body.number, 1);
  res.send(activities);
});

const port = process.env.PORT || 5000;

app.listen(5000, function () {
  console.log(`Listening on ${port}`);
});
