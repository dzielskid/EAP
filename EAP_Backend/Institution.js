class Institution {
    constructor(
      InstitutionID,
      InstitutionName,
      Address,
      City,
      State,
      ZipCode,
      POC,
      AdminID
    ) {
      this.InstitutionID = InstitutionID;
      this.InstitutionName = InstitutionName;
      this.Address = Address;
      this.City = City;
      this.State = State;
      this.ZipCode = ZipCode;
      this.POC = POC;
      this.AdminID = AdminID;
    }
  }
  
  module.exports = Institution;