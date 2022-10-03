/*
packages required:
  npm i mssql --save
*/

const config = require("./DB_Connection.js");
const sql = require("mssql");

const searchInstitutions = async (searchTerm) => {
  try {
    let pool = await sql.connect(config);
    let institutions = pool
      .request()
      .query("select" + searchTerm + "from [dbo].[INSTITUTIONS];");
    return institutions;
  } catch (error) {
    console.log(error);
  }
};

/*
Figure out later
const createInstitution = async (institution) => {
  try {
    let pool = await sql.connect(config);
    let institutions = pool
      .request()
      .query("insert into [dbo].[INSTITUTIONS] values (
      ${institution.id}, ${institutionName}, ${institution.addr})");
    return institutions;
  } catch (error) {
    console.log(error);
  }
};
*/

module.exports = {
  // createInstitution,
  searchInstitutions,
};
