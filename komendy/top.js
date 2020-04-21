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
    let embed = new Discord.RichEmbed()
    .setColor((Math.random() * 0xFFFFFF << 0).toString(16)) 
    .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL)
    .setFooter("Ekonomia")
    .setTimestamp()
    .setTitle("Topka najbogatszych osób");              
    uzytkownicy.forEach(function(uzyt) {        
        embed.addField(uzyt.split("-")[2], uzyt.split("-")[1] + " " + waluta)
    })
    msg.channel.send(embed)
  }
}
module.exports = hajstop;
