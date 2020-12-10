const Discord = require("discord.js")
class drzwi {
  constructor(){
    this.name = "okno",
    this.alias = ["spadajdowindowsa", "microsoft"]
  }
  async run (client, msg, args) {
    let kukanq = " :arrow_right: :window:"
    let join = args.join(" ");
    msg.channel.send(`${msg.mentions.users.first()}` + kukanq);
    console.log("drzwi");
  }
}
module.exports = drzwi;
