const Discord = require("discord.js")
class invite {
  constructor(){
    this.name = "InviteLink",
    this.alias = ["invite"]
  }
  async run (client, msg, args) {
    msg.channel.send("https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&scope=bot&permissions=8");
  }
}
module.exports = invite;
