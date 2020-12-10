const Discord = require("discord.js");
const zabijsie = require("../zabij-sie-db.js");
const fs = require("fs");
class botban {
    constructor(){
        this.name = "botban",
        this.alias = ["bban", "bdzban"]
    }
    async run (client, msg, args) {
        let id = ["284980083104415746", "347736225873920021", "300346870574612491"]
        if(!id.includes(msg.author.id)) return msg.channel.send("NJE MASZ UPRAWNIEŃ TY DEBILU"); // tylko taki jes problem ze potem trzeba bedzie to odczytywac w bot.js
        let banU = msg.mentions.users.first() || client.users.cache.get(args[0]); // dałoby się zrobić
        if(!banU) return msg.channel.send("NJE PODAŁEŚ KOGO TY DEBILU");
        let banR = args.slice(1).join(" ");
        console.log("botban");
        zabijsie.editTableZSDB("./botbans.json", "", "}") // coraz bliżej
        if(zabijsie.readTableZSDB("./botbans.json").split('"').length < 5) {
            zabijsie.addToTableZSDB("./botbans.json", '\n   "' + banU.id + '": ' + "\"" + banR + "\"}")
        } else {
            zabijsie.addToTableZSDB("./botbans.json", ',\n   "' + banU.id + '": ' + "\"" + banR + "\"}")
        }
        
        // chwila jeszcze dodam do bot.js żeby czytało
        msg.channel.send("Pomyślnie zbanowano "+banU+" za ***" + banR + "*** :tada:");
        banU.send("Zostałeś zbanowany przez " + msg.author + " za **" + banR + "**");
    }
}
module.exports = botban;