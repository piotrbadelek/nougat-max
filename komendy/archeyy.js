const Discord = require("discord.js")
const archej = require("archey");
const fs = require('fs');
class archeyy {
  constructor(){
    this.name = "archeyy",
    this.alias = ["archey", "neofetch"]
  }
  async run (client, msg, args) {
      let a = fs.readFileSync("./neo.txt", "utf-8")
    msg.channel.send("``" + a + "``");
    console.log("archedj");
  }
}
module.exports = archeyy;
