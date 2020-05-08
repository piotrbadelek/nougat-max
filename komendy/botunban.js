const Discord = require("discord.js");
const zabijsie = require("../zabij-sie-db.js");
const fs = require("fs");
class botban {
    constructor() {
        this.name = "botunban",
            this.alias = ["bunban", "bundzban"]
    }
    async run(client, msg, args) {
        let id = ["284980083104415746", "347736225873920021", "300346870574612491"]
        if (!id.includes(msg.author.id)) return msg.channel.send("NJE MASZ UPRAWNIEŃ TY DEBILU"); // tylko taki jes problem ze potem trzeba bedzie to odczytywac w bot.js
        let banU = msg.mentions.users.first() || client.users.get(args[0]); // dałoby się zrobić
        if (!banU) return msg.channel.send("NJE PODAŁEŚ KOGO TY DEBILU");
        console.log("botunban");
        console.log(banU.id)
        zabijsie.editTableZSDB("./botbans.json",`"000000000000000000":`,  `"` + banU.id + `":`)

        // chwila jeszcze dodam do bot.js żeby czytało
        msg.channel.send("Pomyślnie odbanowano " + banU);
        banU.send("Zostałeś odbanowany przez " + msg.author);
    }
}
module.exports = botban;