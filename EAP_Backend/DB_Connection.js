/* 
packages required: 
  npm install tedious
  npm i express nodemon cors
  npm install express4-tedious --save
*/

var Connection = require("tedious").Connection;

const config = {
  authentication: {
    options: {
      userName: "",
      password: "",
    },
    type: "default",
  },
  server: "eap-app-db-server.database.windows.net",
  options: {
    database: "EAP_App_db",
    encrypt: true,
  },
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", function (err) {
  console.log("entered connection.on");
  if (err) {
    console.error(err.message);
  } else {
    console.log("connected");
  }
});

console.log("creating express api");
var express = require("express");
var tediousExpress = require("express4-tedious");

var app = express();
app.use(function (req, res, next) {
  req.sql = tediousExpress(connection);
  next();
});

var router = express.Router();

router.get("/", function (req, res) {
  req
    .sql("SELECT * FROM [dbo].[USERS] for json path;") // queries bd
    .into(res); // stores result from query into res
  res.send({ result: "test" });
  console.log(res);
});

app.get("/test1", function (req, res) {
  console.log("test1");
  res.send({ result: "first load" });
});

app.get("/test2", function (req, res) {
  console.log("test2");
  res.send({ result: "on click" });
});
