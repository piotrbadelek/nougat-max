const Discord = require("discord.js")
class xd {
  constructor(){
    this.name = "xd",
    this.alias = ["jem kisiel", "kalshfkasrauifbajsfas"]
  }
  async run (client, msg, args) {
    let join = args.join(" ");
    let cookie;
    if (join){ 
      cookie = "jem " + join;
    } // mam pomysł
    // cokolwiek wpiszesz będzie jadło xD
    else {
      cookie = "jem kisiel";
      
    }
    msg.channel.send(cookie); // tak jest dobrze
    msg.delete(); // zrobilisie juz ten cache??? nein właśnie testujemy spójrz na chat
    // na razie chowamy bo ktoś napisze jeszcze coś obraźliwego client.user.setActivity(`*help | ${client.guilds.size} serwerów! | Wersja 1.1 Pornograficzny Maks | Jem ` + join); // po co
  }
}
module.exports = xd; // działa połowicznie
 // ok XDD ok chwila ulepsza ta komende
