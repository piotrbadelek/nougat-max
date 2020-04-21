const Discord = require("discord.js")
class ping {
  constructor(){
    this.name = "ping",
    this.alias = []
  }
  async run (client, msg, args) {
      var m = await msg.channel.send("sprawdzanie... 🙄");
      const embed = new Discord.RichEmbed()
      .setColor(0x198c41)
      .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL)
      .addField("Latency", Date.now()-msg.createdTimestamp + " ms")
      .addField("API", Math.floor(client.ping) + " ms");
      m.edit(embed);
  }
}
module.exports = ping;
