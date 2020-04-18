const Discord = require("discord.js")
const zabijsie = require("../zabij-sie-db.js")
let waluta = "NLN"
class biedronka {
  constructor(){
    this.name = "biedronka"
    this.alias = ["biedra", "codziennieniskieceny"]
  }
  async run (client, msg, args) {
      let biedronka = zabijsie.readTableZSDB("./biedronka.txt") // ok jestem
      let embed = new Discord.RichEmbed() //pirat no z tym arr   thepirateerrorsguy65
        .setColor((Math.random() * 0xFFFFFF << 0).toString(16)) // torrentujemy od 2015TM
        .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL)
        .setFooter("Biedronka") // jest tam ktoś? ja jestem XD zgadzam sie, programista zapadł w śpiączke
        .setTimestamp() // nie wiem jak ty ale imo lepiej by wyglądało id gdyby było w tytule i w nawiasie, ta
        .setTitle("Lista produktów Biedronki");
      biedronka.split("\n").slice(0,10).forEach(function(produkt) {
        // nazwa|cena|produkt
        if((produkt == "") == false) {
          let nazwa = produkt.split("|")[0]
          let cena = produkt.split("|")[1]
          let id = produkt.split("|")[2]
          embed.addField(nazwa + " (ID: " + id + ")", cena + " " + waluta)
        }        
      })
      msg.channel.send(embed)
  }
}
// YESugat Interactive Inc.
module.exports = biedronka;