const Discord = require("discord.js")
const zabijsie = require("../zabij-sie-db.js");
class gdp {
  constructor(){
    this.name = "gdp",
    this.alias = ["stonks", "pkb", "giedlaDoPoznania"]
  }

  async run (client, msg, args) {
    function dodajPieniadze(tabela) {
        let total = 0
        tabela.split("\n").forEach(function(tab) {
            if(tab !== "") {
                total += parseInt(tab.split(";")[1].split("-")[0]);
            }
            
        })
        return total;
    }
    let hehe = zabijsie.readTableZSDB("./pieniadze.txt");
    let wynik = dodajPieniadze(hehe);
    let embed = new Discord.MessageEmbed()
      .setColor(0x198c41)
      .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL)
      .setTitle(`PKB Nougata`)
      .setDescription("PKB wynosi " + wynik + "NLN!")
      .setFooter("PKB to suma pieniędzy wszystkich użytkowników!")
      .setTimestamp();
    msg.channel.send(embed);
  }
}
module.exports = gdp;
