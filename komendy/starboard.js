const Discord = require("discord.js")
class ogloszenie {
    constructor() {
        this.name = "cytat",
            this.alias = ["starboard", "gwiazdkatablica"]
    }
    async run(client, msg, args) {
        let ogloszeniekanau = msg.mentions.channels.first() || client.channels.get(args[0])
        let ogloszenietext = args.slice(1).join(" ");
        let embed2 = new Discord.MessageEmbed()
        .setColor(0x198c41)
        .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL())
        .setDescription("Nie podałeś kanału na który mam wysłać cytat! 🤨") //Proszę pana a jakie ogłoszenie (ERROR: Nie podano tekstu ogłoszenia)
        .setFooter("Cytaty")
        .setTimestamp();
        if (!ogloszeniekanau) return msg.channel.send(embed2);
        let embed3 = new Discord.MessageEmbed()
        .setColor(0x198c41)
        .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL())
        .setDescription("Nie podałeś treści cytatu! 🤨") //Proszę pana a jakie ogłoszenie (ERROR: Nie podano tekstu ogłoszenia)
        .setFooter("Cytaty")
        .setTimestamp();
        if (!ogloszenietext) return msg.channel.send(embed3);
        msg.delete();
        let embed4 = new Discord.MessageEmbed()
        .setColor(0x198c41)
        .setAuthor(msg.guild.name, msg.guild.iconURL())
        .setDescription("Pomyślnie wysłano cytat na kanał <#"+ogloszeniekanau.id+">. :wink:")
        .setFooter("Cytaty")
        .setTimestamp();
        msg.channel.send(embed4).then(m => m.delete(5000));
        let embed5 = new Discord.MessageEmbed()
            .setColor(0x198c41)
            .setAuthor(msg.guild.name, msg.guild.iconURL())
            .setDescription(ogloszenietext)
            .setFooter(msg.author.username+"#"+msg.author.discriminator)
            .setTimestamp(); // abcdefghijklmnoprstuyz
        ogloszeniekanau.send(embed5);
    }
}
module.exports = ogloszenie;
