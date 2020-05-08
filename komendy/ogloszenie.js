const Discord = require("discord.js")
class ogloszenie {
    constructor() {
        this.name = "Ogloszenie",
            this.alias = ["ogloszenie", "ogłoszenie"]
    }
    async run(client, msg, args) {
        let embed = new Discord.RichEmbed()
        .setColor(0x198c41)
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setDescription("Nie posiadasz uprawnień, wgl co ty człowieku próbujesz. 🤣") //A co, szpiegiem jest pan?
        .setFooter("Ogłoszenia")
        .setTimestamp(); // mogles to wczesniej powiedziec, teraz mi ich szkoda :C :(
        if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(embed);
        let ogloszeniekanau = msg.mentions.channels.first() || client.channels.get(args[0])
        let ogloszenietext = args.slice(1).join(" ");
        let embed2 = new Discord.RichEmbed()
        .setColor(0x198c41)
        .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL)
        .setDescription("Nie podałeś kanału na który mam wysłać ogłoszenie! 🤨") //Proszę pana a jakie ogłoszenie (ERROR: Nie podano tekstu ogłoszenia)
        .setFooter("Ogłoszenia")
        .setTimestamp();
        if (!ogloszeniekanau) return msg.channel.send(embed2);
        let embed3 = new Discord.RichEmbed()
        .setColor(0x198c41)
        .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL)
        .setDescription("Nie podałeś treści ogłoszenia! 🤨") //Proszę pana a jakie ogłoszenie (ERROR: Nie podano tekstu ogłoszenia)
        .setFooter("Ogłoszenia")
        .setTimestamp();
        if (!ogloszenietext) return msg.channel.send(embed3);
        msg.delete();
        let embed4 = new Discord.RichEmbed()
        .setColor(0x198c41)
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setDescription("Pomyślnie wysłano ogłoszenie na kanał <#"+ogloszeniekanau.id+">. :wink:")
        .setFooter("Ogłoszenia")
        .setTimestamp();
        msg.channel.send(embed4).then(m => m.delete(5000));
        let embed5 = new Discord.RichEmbed()
            .setColor(0x198c41)
            .setAuthor(msg.guild.name, msg.guild.iconURL)
            .setDescription(ogloszenietext)
            .setFooter(msg.author.username+"#"+msg.author.discriminator)
            .setTimestamp(); // abcdefghijklmnoprstuyz
        ogloszeniekanau.send(embed5);
    }
}
module.exports = ogloszenie;
