const Discord = require("discord.js")
const zabijsie = require("../zabij-sie-db.js");
class zaproponuj {
  constructor(){
    this.name = "propozycja",
    this.alias = ["zaproponuj"]
  }
  async run (client, msg, args) {
    let join = args.join(" ");
    zabijsie.addToTableZSDB("./propzycja.txt","\n--" + msg.author.tag + "BEGIN--\n" + join + "\n --" + msg.author.tag + " END--");
    msg.channel.send("Wysłano propozycję! :white_check_mark:");
    let szanel = client.channels.cache.find(channel => channel.id === "420996408724815883");
    szanel.send("--" + msg.author.tag + " BEGIN--\n\n**" + join + "**\n\n --" + msg.author.tag + " END--")
  }
}
module.exports = zaproponuj;