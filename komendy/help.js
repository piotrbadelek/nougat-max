const Discord = require("discord.js")
class help {
  constructor(){
    this.name = "pomoc",
    this.alias = ["pomoc", "help"]
  }
  async run (client, msg, args) {
    let embed = new Discord.RichEmbed()
      .setColor(0x198c41)
      .setTitle(`Pomoc`)
      .setDescription(":8ball: 8ball - *ball, *8ball lub *8pilka \n\n:bullettrain_side: lista pociągów w discordzie - *darmowepociągi \n\n:scales: pozywanie - *pozwij \n\n:sailboat: jak to liseu nazywa: shipowanie - *statki lub *statek \n\n:ballot_box_with_check: Informacje na temat użytkownika - *userinfo @użytkownik \n\n:train2: :tram: Wyścig pociągów - *wyscig\n\n:cake: Pozywanie, tyle że zamiast pozwów jest jedzenie - *zjedz");
    msg.channel.send(embed);
  }
}
module.exports = help;
