const Discord = require("discord.js");

class ankieta {
    constructor(){
        this.name = "ankieta"
        this.alias = []
    }
    async run (client, msg, args) {
        console.log("ankieta");
        let tresc = args.join(" ");
        let glosy = []
        const embed = new Discord.MessageEmbed()
        .setColor("#49fc03")
        .setAuthor(msg.author.username + "#" + msg.author.discriminator, msg.author.displayAvatarURL)
        .setDescription(tresc)
        .setFooter("Ankieta (zakończ komendą *stop)");
        msg.channel.send(embed).then(m => {
            m.react("👍");
            m.react("👎");
            let collector = msg.channel.createMessageCollector(m => m)
            collector.on('collect', ms => {

                if(ms.content == "*stop") {
                    if(ms.author.id == msg.author.id) {{
                        let emb = new Discord.MessageEmbed()
                        .setColor("#49fc03")
                        .setAuthor(msg.author.username + "#" + msg.author.discriminator, msg.author.displayAvatarURL)
                        .setDescription("Odpowiedzi do pytania \"" + tresc + "\"");
                        m.reactions.forEach(reakcja => {
                            // chyba tak jakoś to będzie
                            if(reakcja.emoji.name == "👍" || reakcja.emoji.name == "👎") {
                                emb.addField(reakcja.emoji.name, (reakcja.count - 1))
                            }
                        })
                        emb.setFooter("i jest muka :ok_hand:");
                        msg.channel.send(emb)     //zw na 30 min, czyli na pol dnia     nie tym razem na 30 minut tak tak
                        m.reactions.forEach(reakcja => {
                            reakcja.removeAll()
                        }) // missclick pomocy    co pomocy juz nic      potem będzie trzeba te wszystkie komentarze wyciscic
                        collector.stop()
                    }}
                }
            })
        });
    }
}
module.exports = ankieta;