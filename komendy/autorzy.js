const Discord = require("discord.js")
class autorzy {
  constructor(){
    this.name = "Autorzy",
    this.alias = ["autorzy", "liseuipzplitroll"]
  }
  async run (client, msg, args) {
    let embed = new Discord.MessageEmbed()
      .setColor(0x198c41)
      .setTitle(`Autorzy:`)
      .setDescription("Chcesz się skontaktować?:")
      .addField("Liseu#3216", "https://github.com/lisqu16")
      .addField("TheTrollErrorsGuy65#5566", "https://github.com/TheTrollErrorsGuy65")
      .addField("󠇰󠇰󠇰󠇰󠇰󠇰ProgramistaZpolski#9847", "https://github.com/ProgramistaZpolski")
      .addField("Feedback:", "serwer@programistazpolski.ct8.pl")
      console.log("autorzy");
    msg.channel.send(embed);
  }
}
module.exports = autorzy;
