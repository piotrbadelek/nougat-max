const Discord = require("discord.js")
class starboard {
  constructor(client) {
    this.name = "cytaty";
    this.alias = ["cytat"];
    this.client = client;
  }
  async run(client, msg, args) {
    let tresc = args.join(" ");
    var user = msg.author;
    let ogloszeniekanau = msg.mentions.channels.first() || client.channels.get(args[0])
    let ogloszenietext = args.slice(1).join(" ");
    let embed2 = new Discord.RichEmbed()
      .setColor(0x198c41)
      .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL)
      .setDescription("Nie podałeś kanału na który mam wysłać cyctat! 🤨") //Proszę pana a jakie ogłoszenie (ERROR: Nie podano tekstu ogłoszenia)
      .setFooter("Cytaty")
      .setTimestamp();
    if (!ogloszeniekanau) return msg.channel.send(embed2);
    let embed3 = new Discord.RichEmbed()
      .setColor(0x198c41)
      .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL)
      .setDescription("Nie podałeś treści cyctatu! 🤨") //Proszę pana a jakie ogłoszenie (ERROR: Nie podano tekstu ogłoszenia)
      .setFooter("Cytaty")
      .setTimestamp();
    if (!ogloszenietext) return msg.channel.send(embed3);
    msg.delete();
    let embed4 = new Discord.RichEmbed()
      .setColor(0x198c41)
      .setAuthor(msg.guild.name, msg.guild.iconURL)
      .setDescription("Pomyślnie wysłano cytat na kanał <#" + ogloszeniekanau.id + ">. :wink:")
      .setFooter("Cytaty")
      .setTimestamp();
    msg.channel.send(embed4).then(m => m.delete(5000));
    let embed5 = new Discord.RichEmbed()
      .setColor(0x198c41)
      .setAuthor(msg.author.username + "#" + msg.author.discriminator, user.displayAvatarURL)
      .setDescription(ogloszenietext)
      .setFooter(msg.guild.name, msg.guild.iconURL)
      .setTimestamp(); // abcdefghijklmnoprstuyz
    ogloszeniekanau.send(embed5);
  }
  // Here we add the this.extension function to check if there's anything attached to the message.
}
module.exports = starboard;