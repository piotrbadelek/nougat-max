const Discord = require("discord.js")
const zabijsie = require("../zabij-sie-db.js");
class warn {
  constructor(){
    this.name = "warn",
    this.alias = []
  }
  async run (client, msg, args) {
    if (msg.member.hasPermission("MANAGE_MESSAGES")){
        let doWarnu = msg.content.split(" ")[1].replace(/[^0-9]/g,"");
        let ok = true
        if(doWarnu == "") {
          doWarnu = msg.author.id
        } else {
          try {
            client.users.get(doWarnu).username
          }
          catch(error) {
            msg.channel.send("Niepoprawna osoba! Spróbuj ją oznaczyć jeszcze raz.")
            ok = false
          }
        }
        if(ok == true) {
          let warnZabij = "./warny.txt";
          let tuliczbawarnow = zabijsie.readTableZSDB(warnZabij);
          if(tuliczbawarnow.includes(msg.guild.id + "|" + doWarnu)) {
              let jegoWarny = parseInt(tuliczbawarnow.split("|")[2].split(";")[0]);
              zabijsie.editTableZSDB(warnZabij, msg.guild.id + "|" + doWarnu + "|" + (jegoWarny + 1).toString() + ";", msg.guild.id + "|" + doWarnu + "|" + jegoWarny + ";")
              msg.channel.send("Dałem ostrzeżenie osobie " + client.users.get(doWarnu).username + "!")
          }else{
              zabijsie.addToTableZSDB(warnZabij, msg.guild.id + "|" + doWarnu + "|" + "1" + ";\n");
              msg.channel.send("Dałem ostrzeżenie osobie " + client.users.get(doWarnu).username + "!")
          }
        }
        
    }
  }
}
module.exports = warn;
// ja se popatrze
//ok
//jak sie bierze nazwe gulida
// wgl duzo juz zrobilismy
// w tym bocie
// no tak
// wszystkie other zrobiliśmy