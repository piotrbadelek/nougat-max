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
    let embed = new Discord.RichEmbed()
      .setColor("#ff7aeb")
      .setTitle(arg1 + " :heart: " + arg2)
      .setDescription("Oto twój wynik:\n" + odpowiedzi + "%");
    msg.channel.send(embed);
  }
}
module.exports = statki;
