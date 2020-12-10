const Discord = require("discord.js")
class care {
  constructor(){
    this.name = "care",
    this.alias = ["careapi"]
  }
  async run (client, msg, args, kolejka) {
      let smieci = [
        "https://liskqu.ct8.pl/care/img/1.png",
        "https://liskqu.ct8.pl/care/img/2.png",
        "https://liskqu.ct8.pl/care/img/3.png",
        "https://liskqu.ct8.pl/care/img/4.png",
        "https://liskqu.ct8.pl/care/img/5.png",
        "https://liskqu.ct8.pl/care/img/6.png",
        "https://liskqu.ct8.pl/care/img/7.png",
        "https://liskqu.ct8.pl/care/img/8.png",
      ]
      var item = smieci[Math.floor(Math.random() * smieci.length)];
      msg.channel.send("Oto twój obrazek!", {
          MessageAttachment: item
      });
  }
}
module.exports = care;
