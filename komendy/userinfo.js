const Discord = require("discord.js")
class userinfo {
  constructor(){
    this.name = "userinfo"
    this.alias = ["ui"]
  }
  async run (client, msg, args) {

    var user = msg.mentions.users.first();
    if(user = "" || user == null || user == undefined) { //dalej wywala blad na tej linijce
      var user = msg.author;
      var member = msg.member;
    } else {
      var user = msg.mentions.users.first();
      var member = msg.mentions.members.first();
    }

    let createddate = new Date(user.createdTimestamp);
    let cdMin = "0" + createddate.getMinutes();
    let cdMon = "0" + (createddate.getMonth()+1);

    let joineddate = new Date(member.joinedTimestamp);
    let jdMin = "0" + joineddate.getMinutes();
    let jdMon = "0" + (joineddate.getMonth()+1);

    let status = "Niezdefiniowany";
    switch (user.presence.status) {
      case 'online':
          status = 'Dostępny'
          break;
      case 'offline':
          status = 'Niedostępny';
          break;
      case 'idle':
          status = 'Zaraz wracam';
          break;
      case 'dnd':
          status = 'Nie przeszkadzać';
          break;
    }

    const embed = new Discord.RichEmbed()
    .setColor(0x128070)
    .setAuthor(user.username + "#" + user.discriminator, user.displayAvatarURL)
    .addField("✅ Konto stworzone", `${createddate.getDate()}.${cdMon.substr(-2)}.${createddate.getFullYear()} ${createddate.getHours()}:${createddate.getHours()}:${cdMin.substr(-2)}`, true)
    .addField("🤔 Status", status, true)
    .addField("➡️ Dołączono na serwer", `${joineddate.getDate()}.${jdMon.substr(-2)}.${joineddate.getFullYear()} ${joineddate.getHours()}:${joineddate.getHours()}:${jdMin.substr(-2)}`,true)
    .addField("🔢 ID", user.id, true)
    .setThumbnail(user.displayAvatarURL);
    //msg.channel.send(`\n:white_check_mark: **konto stworzone:** ${createddate}, \n \n :arrow_right: **dołączono do tego serwera:** ${joineddate},\n \n :bullettrain_side:  **status:** ${status}`)
    msg.channel.send(embed);
  }
}

module.exports = userinfo;

// przeporuje zabijsięDB handler na js, ok

//wracam za 15 minut bo musze na koniec mszy pójść
// jeste
