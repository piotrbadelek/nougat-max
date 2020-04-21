const Discord = require("discord.js")
class openlink {
  constructor(){
    this.name = "linkdogit",
    this.alias = ["git", "github"]
  }
  async run (client, msg, args) {
    let embed = new Discord.RichEmbed()
      .setAuthor("Nougat", "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")
      .setColor(0x198c41)
      .setTitle(`Nougat jest open source!`)
      .setDescription("No bo większość botów nie jest i pizza zapomniał o orginalnym nougacie")
      .addField("Link do **G**ithuba", "https://github.com/ProgramistaZpolski/nougat-max");
    msg.channel.send(embed);
  }
}
module.exports = openlink;
