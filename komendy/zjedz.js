const Discord = require("discord.js")
class pozwij {
  constructor(){
    this.name = "zjedz",
    this.alias = ["zjedz"]
  }
  async run (client, msg, args) {
    msg.channel.send(`<@${msg.author.id}>, oznacz kogo chcesz zjeść (lub wpisz "anuluj" żeby anulować)`)
    let idpozwanego;
    let zatwierdzil = false;
    let powodpozwania = ""
    let oznaczony = false
    let podalpowod = false
    let collector = msg.channel.createMessageCollector(m => m);
    collector.on('collect', m => {
        if(m.author.id == msg.author.id) {
            if(oznaczony == false) {
                try {
                    if(m.content == "anuluj") {
                        collector.stop()
                        msg.channel.send("Anuluję!")
                    } else {
                        idpozwanego = m.content.replace(/[^0-9]/g,"")
                        console.log("id pozwanego: " + idpozwanego)
                        oznaczony = true
                        msg.channel.send(`<@${msg.author.id}>, podaj powód, przez który chcesz zjeść użytkownika`)
                    }

                }
                catch(err) {console.log(err)}
            } else if(oznaczony == true && podalpowod == false) {
                // próbujemy wziąć informacje o pozwanym, jak nie wyjdzie to jeszcze raz prosimy o oznaczenie
                try {
                    console.log(client.users.cache.get(idpozwanego).tag)
                    powodpozwania = m.content;
                    podalpowod = true
                    let embedd = new Discord.MessageEmbed()
                    .setAuthor("Magda Gessler", "https://ocdn.eu/pulscms-transforms/1/3Umk9kpTURBXy85ZTBmZjFmYmE4MGM3MzAzM2E0MDJhN2I4OTM0Y2E2Zi5qcGeTlQPNA8jMi80HxM0EX5MFzQMUzQG8kwmmYWM5ZDZiBoGhMAE/magda-gessler.jpg")
                        .setTitle("Potwierdzasz?")
                        .addField("Zjadasz użytkownika:", client.users.cache.get(idpozwanego).tag)
                        .addField("Zjadasz go za:", powodpozwania)
                        .setFooter("Potwierdź wpisując ✅ tak/⛔ nie.") //https://ocdn.eu/pulscms-transforms/1/3Umk9kpTURBXy85ZTBmZjFmYmE4MGM3MzAzM2E0MDJhN2I4OTM0Y2E2Zi5qcGeTlQPNA8jMi80HxM0EX5MFzQMUzQG8kwmmYWM5ZDZiBoGhMAE/magda-gessler.jpg
                    msg.channel.send(embedd)
                }
                catch(error) {
                  oznaczony = false
                  msg.channel.send("⛔ Błąd! Spróbuj oznaczyć kogo chcesz jeszcze raz!")
                }

            } else if(oznaczony == true && podalpowod == true) {
                if(m.content.toLowerCase().includes("tak")) {
                    zatwierdzil = true
                    console.log("zatwierdzono pozew :D")
                    let nowyembed = new Discord.MessageEmbed()
                        .setTitle("Ok :white_check_mark:")
                        .setDescription("Zjadam użytkownika " + client.users.cache.get(idpozwanego).tag + "\n\nPowód: " + powodpozwania);
                    msg.channel.send(nowyembed)
                    collector.stop()
                    client.users.get(idpozwanego).send("Użytkownik " + msg.author.tag + " zjada Cię!\n\nPowód: " + powodpozwania) // same wysyłanie dma do pozwanego, jak potrzeba to zmienić na embeda czy cokolwiek
                } else if(m.content.toLowerCase().includes("nie")) {
                    msg.channel.send("Anuluję zjadanie!")
                    collector.stop()
                }
            }
        }
    })
  }
}
module.exports = pozwij;
