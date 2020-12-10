const Discord = require("discord.js")
class clap {
  constructor(){
    this.name = "clap",
    this.alias = ["klap", "gratulacje"]
  }
  async run (client, msg, args) {
    let join = args.join(" ");
    msg.channel.send(":clap: " + join + " :clap:");
    console.log("clap");
  }
}
module.exports = clap;
