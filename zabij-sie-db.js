const fs = require('fs');
module.exports = {
  addToTableZSDB: function(table, nowedane) {
    fs.appendFileSync(table, nowedane);
    return "dodano do tabeli";
  },
  readTableZSDB: function(table) {
    return fs.readFileSync(table, "utf-8");
  }

};
