const Discord = require("discord.js")
const zabijsie = require("../zabij-sie-db.js")
let waluta = "NLN"
class hajs {
  constructor(){
    this.name = "hajs",
    this.alias = ["bal", "balans", "zielonealbosrebrneidkzielonemaszjaksabanknotyasrebrnejakmonetyoktakpoprostumitoprzypadlodoglowyoknohatepls"]
  }
  async run (client, msg, args) {
    let pieniadze = zabijsie.readTableZSDB("./pieniadze.txt")
    if(msg.content.includes("<") && msg.content.includes(">")) {
      // mention
      let id = msg.content.replace(/[^0-9]/g,"")
      if(pieniadze.includes(id)) {
        let balans = pieniadze.split(id + ";")[1].split("-")[0]
        let embed = new Discord.RichEmbed()
        .setColor("#32a852")
        .setAuthor(client.users.get(id).username, client.users.get(id).displayAvatarURL)
        .setDescription(`${client.users.get(id).username} posiada ${balans} ${waluta}! :moneybag: \n NLN = niemiecki złotych \n RUR = Rosyjskie Euro`)
        .setFooter("Ekonomia");
        msg.channel.send(embed)
      } else {
        try {
          let embed = new Discord.RichEmbed()
          .setColor("#32a852")
          .setAuthor(client.users.get(id).username, client.users.get(id).displayAvatarURL)
          .setDescription(`${client.users.get(id).username} nic jeszcze nie zarobił! :moneybag: \n NLN = niemiecki złotych \n RUR = Rosyjskie Euro`)
          .setFooter("Ekonomia");
          msg.channel.send(embed)
        }
        catch(error) {
          msg.channel.send("Błąd przy sprawdzaniu. (niepoprawna osoba?)")
          console.log(error)
        }
      }
    } else {
      // nie ma mentiona, sprawdzamy swoje
      let balans = pieniadze.split(msg.author.id + ";")[1].split("-")[0]
      balans = balans / 1 //inflancja
      let balanspln = balans * 5.5
      balanspln = Math.floor(balanspln)
      let embed = new Discord.RichEmbed()
      .setColor("#32a852")
      .setAuthor(msg.author.username, msg.author.displayAvatarURL)
      .setDescription(`Posiadasz ${balans} ${waluta} :moneybag: \n NLN = niemiecki złotych \n W złotówkach to około ${balanspln}zł!`)
      .setFooter("Ekonomia");
      msg.channel.send(embed)
    }
  }
}
module.exports = hajs;
