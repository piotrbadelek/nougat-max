const Discord = require("discord.js")
class statki {
  constructor(){
    this.name = "statki",
    this.alias = ["statki", "statek"]
  }
  async run (client, msg, args) {
    let arg2 = args[0]
    let arg1 = args[1]
    let odpowiedzi = Math.floor((Math.random() * 100));
    let embed = new Discord.MessageEmbed()
      .setColor("#ff7aeb")
      .setTitle(arg2 + " :heart: " + arg1)
      .setDescription("Oto twój wynik:\n" + odpowiedzi + "%");
    msg.channel.send(embed);
  }
}
module.exports = statki;
