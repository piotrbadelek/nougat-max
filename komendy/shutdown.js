const Discord = require("discord.js")
const zabijsie = require("../zabij-sie-db.js");
class shutdown {
  constructor(){
    this.name = "shutdown",
    this.alias = ["wylacz", "wyłącz"]
  }
  async run (client, msg, args) {
    let id = ["284980083104415746", "347736225873920021", "300346870574612491"]
    if (id.includes(msg.author.id)) { // shutup xd
        let join = args.join(" ")
        msg.channel.send("Wyłączam bota z powodu " + join + "!"); // nie ma zapisywania jest teraz tylko powód
        client.user.setStatus("offline");
    }
  }
}
module.exports = shutdown;
