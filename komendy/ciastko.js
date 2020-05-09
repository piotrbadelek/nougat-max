const Discord = require("discord.js")
class ciastko {
  constructor(){
    this.name = "ciastko",
    this.alias = ["ciastko"]
  }
  async run (client, msg, args) {
    let cookie = "\🍪";
    msg.channel.send(msg.author.username + " masz tu " + cookie);
  }
}
module.exports = ciastko;
