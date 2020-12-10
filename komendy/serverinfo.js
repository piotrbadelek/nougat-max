const Discord = require("discord.js")
function findVerifLevel(lvl) {
  if (lvl == "NONE") {
    return "None";
  } else if (lvl == "LOW") {
    return "Low"
  } else if (lvl == "MEDIUM") {
    return "Medium";
  } else if (lvl == "HIGH") {
    return "(╯°□°）╯︵  ┻━┻";
  } else {
    return "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻";
  }
};
class xd {
  constructor(){
    this.name = "serverinfo",
    this.alias = ["serwerinfo"]
  }
  async run (client, msg, args) {
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": ":flag_br: Brazylia",
        "eu-central": ":flag_eu: Centralna Europa",
        "singapore": ":flag_sg: Singapur",
        "us-central": ":flag_us: Stany Zjednoczone",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: Stany Zjednoczone", // gratuluje kopiowania z neta, to samo zrobilem sam w moim bocie XD XD wes to spolszcz   ok za chwile najpierw czy dziala
        "us-south": ":flag_us: Stany Zjednoczone",
        "us-west": ":flag_us: Stany Zjednoczone",
        "eu-west": ":flag_eu: Zachodnia Europa",
        "vip-us-east": ":flag_us: VIP Stany Zjednoczone",
        "london": ":flag_gb: Londyn",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Rosja ☭",
        "southafrica": ":flag_za:  Afryka Południowa",
        "europe": ":flag_eu: Europa"
    };
    const embed = new Discord.MessageEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL())
        .setColor(0x198c41)
        .addField("Nazwa", msg.guild.name, true)
        .addField("ID", msg.guild.id, true)
        .addField("Właściciel", `${msg.guild.owner.user.username}#${msg.guild.owner.user.discriminator}`, true)
        .addField("Region", region[msg.guild.region], true)
        .addField("Członkowie | Ludzie | Boty", `${msg.guild.members.cache.size} | ${msg.guild.memberCount}`, true)
        .addField("Level weryfikacji", findVerifLevel(msg.guild.verificationLevel), true)
        .addField("Kanały", msg.guild.channels.cache.size, true)
        .addField("Role", msg.guild.roles.cache.size, true)
        .addField("Utworzono:", `${msg.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(msg.channel.guild.createdAt)})`, true)
        .setThumbnail(msg.guild.iconURL)
    msg.channel.send({embed});
  }
}
module.exports = xd;