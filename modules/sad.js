const Discord = require("discord.js")
class pozwij {
  constructor(){
    this.name = "pozwij",
    this.alias = ["pozwij" , "sad"]
  }
  async run (client, msg, args) {
    msg.channel.send(`<@${msg.author.id}>, oznacz kogo chcesz pozwać (lub wpisz "anuluj" żeby anulować)`)
    let idpozwanego;
    let zatwierdzil = false;
    let powodpozwania = ""
    let oznaczony = false
    let podalpowod = false
    let collector = message.channel.createCollector(m => m);
    collector.on('collect', m => {
        if(m.author.id == msg.author.id) {
            if(oznaczony == false) {
                try {
                    if(m.content == "anuluj") {
                        collector.stop()
                    } else {
                        idpozwanego = m.content.replace("<@", "").replace(">", "")
                        oznaczony = true
                        msg.channel.send(`<@${msg.author.id}>, podaj powód, przez który chcesz pozwać użytkownika`)
                    }

                }
                catch(err) {console.log(err)}
            } else if(oznaczony == true && podalpowod == false) {
                // próbujemy wziąć informacje o pozwanym, jak nie wyjdzie to jeszcze raz prosimy o oznaczenie
                try {
                    let a = client.users.get(idpozwanego).username
                    powodpozwania = m.content;
                    podalpowod = true
                    let embedd = new Discord.MessageEmbed()
                        .setTitle("Potwierdzasz?")
                        .addField("Pozywasz użytkownika:", client.users.get(idpozwanego).username)
                        .addField("Pozywasz go za:", powodpozwania)
                        .setFooter("Potwierdź wpisując tak/nie.")
                    msg.channel.send(embedd).then(ms => {
                        while (zatwierdzil == false) {
                            // czekamy na zatwierdzenie
                        }
                        let nowyembed = new Discord.MessageEmbed()
                            .setTitle("Ok :white_check_mark:")
                            .setDescription("Pozywam użytkownika " + client.users.get(idpozwanego).username + " za " + powodpozwania);
                        ms.edit(nowyembed)
                        collector.stop()
                        client.users.get(idpozwanego).send("Użytkownik " + msg.author.username + " pozywa Cię!\n\nPowód: " + powodpozwania) // same wysyłanie dma do pozwanego, jak potrzeba to zmienić na embeda czy cokolwiek
                    })
                }
                catch(error) {
                    oznaczony = false
                    msg.channel.send(`<@${msg.author.id}>, oznacz kogo chcesz pozwać. Nic nie dodawaj do treści wiadomości, tylko wzmiankę.`)
                }

            } else if(oznaczony == true && podalpowod == true) {
                if(m.content.toLowerCase().includes("tak")) {
                    zatwierdzil = true
                }
            }
        }
    })
  }
}
module.exports = pozwij;
