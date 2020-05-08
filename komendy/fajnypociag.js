const Discord = require("discord.js")
const fs = require('fs');
class fajnypociag {
  constructor(){
    this.name = "fajnypociag",
    this.alias = ["fajnypociag"]
  }
  async run (client, msg, args) {
    msg.delete();
    client.channels.get(`698906273906819083`).send(fs.readFileSync("wiadomosc.txt", "utf-8"))
  }
}
module.exports = fajnypociag;
