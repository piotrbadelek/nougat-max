const Discord = require("discord.js")
class xd {
  constructor(){
    this.name = "xd",
    this.alias = ["XD"]
  }
  async run (client, msg, args) {
    let cookie = "XD";
    msg.channel.send(cookie);
    msg.delete();
  }
}
module.exports = xd;
