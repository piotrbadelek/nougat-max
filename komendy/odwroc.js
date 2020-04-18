const Discord = require("discord.js")
class odwroc {
  constructor(){
    this.name = "odwroc-tekst",
    this.alias = ["odwroc"]
  }
  async run (client, msg, args) {
    let arg2 = args.join(" ");
    let odwrocone = arg2.split("").reverse().join("")
    let nein = ["https://", "http://", "www.", "<@", "<!@"]
    nein.forEach(function(nien) {
      odwrocone = odwrocone.split(nien).join("")
    })
    msg.channel.send(odwrocone);
  }
}
module.exports = odwroc;
