const Discord = require("discord.js")
class drzwi {
  constructor(){
    this.name = "drzwi",
    this.alias = ["spadaj", "door"]
  }
  async run (client, msg, args) {
    let kukanq = " :arrow_right: :door:"
    let join = args.join(" ");
    msg.channel.send(`${msg.mentions.users.first()}` + kukanq);
    console.log("drzwi");
  }
}
module.exports = drzwi;
