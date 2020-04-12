const Discord = require("discord.js")
class pozwij {
  constructor(){
    this.name = "pozwij",
    this.alias = ["pozwij"]
  }
  async run (client, msg, args) {
    msg.channel.send(`:question: <@${msg.author.id}>, oznacz kogo chcesz pozwać (lub wpisz "anuluj" żeby anulować).`)
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
                        msg.channel.send(`:question: <@${msg.author.id}>, podaj powód, przez który chcesz pozwać użytkownika.`)
                    }

                }
                catch(err) {console.log(err)}
            } else if(oznaczony == true && podalpowod == false) {
                // próbujemy wziąć informacje o pozwanym, jak nie wyjdzie to jeszcze raz prosimy o oznaczenie
                try {
                    console.log(client.users.get(idpozwanego).tag)
                    powodpozwania = m.content;
                    podalpowod = true
                    let embedd = new Discord.RichEmbed()
                        .setColor((Math.random() * 0xFFFFFF << 0).toString(16))
                        .setAuthor("Anna Maria Wesołowska", "https://begio.pl/wp-content/uploads/2019/09/S%C4%99dzia-Anna-Maria-Weso%C5%82owska-opowiedzia%C5%82a-o-swoim-dramacie.jpg")
                        .setTitle("Potwierdzenie")
                        .addField("Pozywasz użytkownika:", client.users.get(idpozwanego).tag)
                        .addField("Pozywasz go za:", powodpozwania)
                        .setFooter("Potwierdź wpisując ✅ tak/⛔ nie.")
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
                    let nowyembed = new Discord.RichEmbed()
                        .setAuthor("Anna Maria Wesołowska", "https://begio.pl/wp-content/uploads/2019/09/S%C4%99dzia-Anna-Maria-Weso%C5%82owska-opowiedzia%C5%82a-o-swoim-dramacie.jpg")
                        .setColor((Math.random() * 0xFFFFFF << 0).toString(16))
                        .setTitle(":white_check_mark: Twój pozew został rozpatrzony")
                        .setDescription("Pozywam użytkownika " + client.users.get(idpozwanego).tag + " za " + powodpozwania + "...");
                    msg.channel.send(nowyembed)
                    collector.stop()
                    const mybed = new Discord.RichEmbed()
                      .setColor((Math.random() * 0xFFFFFF << 0).toString(16))
                      .setAuthor("Listonosz", "https://gfx.wiadomosci.radiozet.pl/var/radiozetwiadomosci/storage/images/koronawirus/krakow-listonosz-zakazony-koronawirusem.-poczta-wyjasnia-sanepid-o-kwarantannie/7152562-1-pol-PL/Zmowa-milczenia-wokol-zakazonego-listonosza-Dziesiatki-osob-koncza-kwarantanne_article.jpg")
                      .setDescription("Otrzymałeś pozew! 😮\nPozew od użytkownika <@" + msg.author.id + "> za " + powodpozwania);
                    client.users.get(idpozwanego).send(mybed) // same wysyłanie dma do pozwanego, jak potrzeba to zmienić na embeda czy cokolwiek
                } else if(m.content.toLowerCase().includes("nie")) {
                    msg.channel.send("🎉 Anuluję pozewpozywanie!")
                    collector.stop()
                }
            }
        }
    })
  }
}
module.exports = pozwij;
