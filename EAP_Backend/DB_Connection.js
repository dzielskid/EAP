/*
packages required: 
  npm install tedious
  npm i express nodemon cors
  npm install express4-tedious --save
*/

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

module.exports = config;
