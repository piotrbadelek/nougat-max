const Discord = require("discord.js")
const zabijsie = require("../zabij-sie-db.js")
let waluta = "NLN"
class zakup {
  constructor(){
    this.name = "kup",
    this.alias = ["zakup"]
  } 
  async run (client, msg, args) { 
    let iddokupienia = msg.content.split(" ")[1]; 
    let biedronka = zabijsie.readTableZSDB("./biedronka.txt"); 
    let cash_money = zabijsie.readTableZSDB("./pieniadze.txt"); 
    if(cash_money.includes(msg.author.id)) { 
      // kupujący jest zapisany do bazy
      let pieniadze = parseInt(cash_money.split(msg.author.id)[1].split("-")[0]);
      let a = biedronka.split(iddokupienia)[0].split("|")
      let dozaplaty = parseInt(a[a.length - 1]);
      if((pieniadze - dozaplaty) < 0) {
        let embed = new Discord.RichEmbed()
        .setColor(0x194c41)
        .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL)
        .setDescription("Niestety, masz nie wystarczająco pieniędzy! :cry:\nPotrzebujesz "+dozaplaty+" "+waluta)
        .setFooter("Biedronka");
        msg.channel.send(embed)

      } else {
        pieniadze = pieniadze - dozaplaty;
        zabijsie.editTableZSDB("./biedronka.txt", msg.author.id + ";" + (pieniadze - dozaplaty), msg.author.id + ";" + pieniadze)
        let embed = new Discord.RichEmbed()
        .setColor(0x194c41)
        .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL)
        .setDescription("Zakupiłeś produkt! Wysyłam ci go na DM!")
        .setFooter("Biedronka");
        msg.channel.send(embed) // ktoś dodał r do bot.js takie samotne r ;c ; halohalohalohaloD
        let produkt = biedronka.split(iddokupienia)[1].split("|")
        msg.author.send("Zakupiłeś produkt z Biedronki! Oto on:\n" + produkt[1].split("\n")[0])
      }
      
    }
  }
}
module.exports = zakup;