const Discord = require("discord.js")
class xd {
  constructor(){
    this.name = "xd",
    this.alias = ["jem kisiel"]
  }
  async run (client, msg, args) {
    let cookie = "jem kisiel";
    msg.channel.send(cookie);
    msg.delete();
  }
}
module.exports = xd;
