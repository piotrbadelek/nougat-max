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
    console.log(iddokupienia)
    let biedronka = zabijsie.readTableZSDB("./biedronka.txt"); 
    let cashmoney = zabijsie.readTableZSDB("./pieniadze.txt"); 
    if(cashmoney.includes(msg.author.id)) { 
      // kupujący jest zapisany do bazy
      let pieniadze = parseInt(cashmoney.split(msg.author.id + ";")[1].split("-")[0]);
      console.log(pieniadze);
      let a = biedronka.split(iddokupienia)[0].split("|")
      let produkt = biedronka.split(iddokupienia)[1].split("|")
      produkt = produkt[1]
      console.log(a);
      console.log(produkt)
      let dozaplaty = parseInt(produkt);
      console.log(dozaplaty)
      if((pieniadze - dozaplaty) < 0) {
        let embed = new Discord.RichEmbed()
        .setColor(0x194c41)
        .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL)
        .setDescription("Niestety, masz nie wystarczająco pieniędzy! :cry:\nPotrzebujesz "+dozaplaty+" "+waluta)
        .setFooter("Biedronka");
        msg.channel.send(embed)

      } else {
        pieniadze = pieniadze - dozaplaty
        let smieci = pieniadze.toString()
        let pierwotnesmieci = pieniadze + dozaplaty;
        pierwotnesmieci = pierwotnesmieci.toString();
        console.log(pieniadze)
        zabijsie.editTableZSDB("./pieniadze.txt", msg.author.id + ";" + smieci, msg.author.id + ";" + pierwotnesmieci)
        console.log(pieniadze)
        let embed = new Discord.RichEmbed()
        .setColor(0x194c41)
        .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL)
        .setDescription("Zakupiłeś produkt! Wysyłam ci go na DM!")
        .setFooter("Biedronka");
        msg.channel.send(embed) // ktoś dodał r do bot.js takie samotne r ;c ; halohalohalohaloD
        let produkt = biedronka.split(iddokupienia)[1].split("|")
        msg.author.send("Zakupiłeś produkt z Biedronki! Oto on:\n" + produkt[2].split("\n")[0])
      }
      
    }
  }
}
module.exports = zakup;