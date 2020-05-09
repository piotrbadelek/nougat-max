const Discord = require("discord.js")
class invite {
  constructor(){
    this.name = "InviteLink",
    this.alias = ["invite"]
  }
  async run (client, msg, args) {
    let invitelink = "https://discordapp.com/oauth2/authorize?client_id=698613249616117881&scope=bot&permissions=8";
    let embed = new Discord.RichEmbed()
      .setColor(0x198c41)
      .setTitle(`Dodaj Nougata na swój serwer! :D`)
      .setDescription(":link: [Kliknij aby dodać!](https://discordapp.com/oauth2/authorize?client_id=698613249616117881&scope=bot&permissions=8)");
    msg.channel.send(embed);
  }
}
module.exports = invite;
