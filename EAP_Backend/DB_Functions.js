/*
packages required:
  npm i mssql --save
*/

const config = require("./DB_Connection.js");
const sql = require("mssql");

const searchInstitutions = async () => {
  try {
    let pool = await sql.connect(config);
    let institutions = await pool
      .request()
      .query(
        "SELECT * FROM [dbo].[INSTITUTIONS];"
      );
    return institutions;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/*
Old query
"SELECT * FROM [dbo].[INSTITUTIONS] WHERE Institution_Name LIKE '%" +
          searchTerm +
          "%' order by Institution_Name asc;"
*/

/*
Figure out later - adding institution to database
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