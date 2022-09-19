// npm install tedious
const { Connection, Request } = require("tedious");
// import crypto from "crypto";

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "EAP_Admin",
      password: "CSEE480&481",
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
connection.on("connect", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("connected");
    queryDatabase("*");
  }
});

connection.connect();

// var Request = require("tedious").Request;
var TYPES = require("tedious").TYPES;

export function queryDatabase() {
  request = new Request("SELECT * FROM [dbo].[Users];", function (err) {
    if (err) {
      console.log(err);
    }
  });
  var result = "";
  request.on("row", function (columns) {
    columns.forEach(function (column) {
      if (column.value === null) {
        console.log("NULL");
      } else {
        result += column.value + " ";
      }
    });
    console.log(result);
    result = "";
  });

  request.on("done", function (rowCount, more) {
    console.log(rowCount + " rows returned");
  });

  // Close the connection after the final event emitted by the request, after the callback passes
  request.on("requestCompleted", function (rowCount, more) {
    connection.close();
  });
  connection.execSql(request);
}
