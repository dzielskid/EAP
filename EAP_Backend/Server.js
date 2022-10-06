// npm i npm-run-all

const express = require("express"); // creates express server
const dbFunction = require("./DB_Functions");
const cors = require("cors");
const { response } = require("express");

const API_PORT = process.env.PORT || 5000;
const app = express(); // starts server

app.use(express.json()); // this and urlencoded allows for passing json from front end to backend
app.use(express.urlencoded());
app.use(cors()); // allows for connection b/w front end and back end

app.post("/api", async (req, res) => {
  console.log("entered api");
  const result = await dbFunction.searchInstitutions(req.body.name);
  res.send(result.redcordset); // sends an object
});


dbFunction.searchInstitutions("WEST").then((res) => {
  console.log(res.recordset); // .recordset gives array of objects
});

app.listen(API_PORT, () => console.log("Listening on port " + API_PORT));
