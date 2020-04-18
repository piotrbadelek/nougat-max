const Discord = require("discord.js")
const zabijsie = require("../zabij-sie-db.js")
let waluta = "NLN"
class hajstop {
  constructor(){
    this.name = "ranking",
    this.alias = ["top", "top10", "topka"]
  }
  async run (client, msg, args) {
    let pieniadze = zabijsie.readTableZSDB("./pieniadze.txt")
    pieniadze = pieniadze.split("\n")
    let o = pieniadze.shift()
    let arr = []
    let liczby = []
    let uzytkownicy = []
    pieniadze.forEach(function(user) {
        console.log(user)
        if(user == "") { 
        } else {
          let a = arr.push(user.split(";")[1])
        
          let b = liczby.push(user.split(";")[1].split("-")[0])
        }
        
    })
    liczby = liczby.sort((a, b) => b - a)
    liczby.forEach(function(liczba) {
        arr.forEach(function(uz) {
            if(uz.split("-")[0] == liczba) {
                let aa = uzytkownicy.push(liczba + "-" + uz)
            }
        })
    })
    uzytkownicy = uzytkownicy.slice(0,10)
    let embed = new Discord.RichEmbed() //pirat no z tym arr   thepirateerrorsguy65
    .setColor((Math.random() * 0xFFFFFF << 0).toString(16)) // torrentujemy od 2015TM
    .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL)
    .setFooter("Ekonomia")
    .setTimestamp()
    .setTitle("Topka najbogatszych osób");                  // torrent już od 7zł miesięcznie.       wracam za pol godziny
    uzytkownicy.forEach(function(uzyt) {        
        // w NLN to będzie 75 natomiast w RUR-ach-PCV 185
        embed.addField(uzyt.split("-")[2], uzyt.split("-")[1] + " " + waluta) // Dostępne lokalizacje serwerów: Frankfurt, Antarktyda, Miodary   ale serio jest vpn na antarktyde
    }) //nein działa
    msg.channel.send(embed)
  }
}
module.exports = hajstop;
