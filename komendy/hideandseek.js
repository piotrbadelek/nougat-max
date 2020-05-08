const Discord = require("discord.js")
class hideandseek {
  constructor(){
    this.name = "nein",
    this.alias = ["ohnein"]
  }
  async run (client, msg, args) {
    let i = Math.floor(Math.random() * 8);
    let join = args.join(" ");
    let embed = new Discord.RichEmbed()
      .setColor(0x198c41)
      .setTitle(`:8ball: ${args.join(" ")}`)
      .setDescription(odpowiedzi[i]);
    msg.channel.send(embed);
    console.log("hideandseek");
  }
}
module.exports = hideandseek;
