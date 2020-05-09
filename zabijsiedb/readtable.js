const fs = require('fs');
string addToTableZSDB(table) {
  return fs.readFile(table, "utf-8");
}
