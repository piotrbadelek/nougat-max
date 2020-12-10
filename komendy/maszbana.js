const Discord = require("discord.js")
class maszbana {
  constructor(){
    this.name = "maszbana",
    this.alias = ["banwbocie"]
  }
  async run (client, msg, args) {
    let cookie = "Masz bana w bocie!!!!";
    msg.channel.send(cookie);
    msg.delete();
  }
}
module.exports = maszbana;
