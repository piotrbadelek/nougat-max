const fs = require('fs');
function addToTableZSDB(table, nowedane) {
  fs.appendFileSync(table, nowedane);
  return "dodano do tabeli";
}
function readTableZSDB(table) {
  return fs.readFileSync(table, "utf-8");
}
