// npm i npm-run-all
// npm install cors

const express = require("express"); // creates express server
const dbFunction = require("./DB_Functions");
const { response } = require("express");

const API_PORT = process.env.PORT || 5000;
const app = express(); // starts server
var cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(cors()); // allows for communication w http
app.use(express.json()); // this and urlencoded allows for passing json from front end to backend


app.get("/api/searchInstitution", async (req, res) => {
  console.log("entered search institution");
  const result = await dbFunction.searchInstitutions(); // this works
  res.send(result.redcordset); // sends an object 
  console.log(result.recordset);
});

app.listen(API_PORT, () => console.log("Listening on port " + API_PORT));
