const Discord = require("discord.js")
class darmowepociagi {
  constructor(){
    this.name = "darmowe pociągi",
    this.alias = ["pociag", "pociagi", "pociągi", "pociąg"]
  }
  async run (client, msg, args) {
    msg.channel.send(":bullettrain_front: :bullettrain_side: :train: :train2: :tram: ");
  }
}
module.exports = darmowepociagi;
