const Discord = require("discord.js")
class ping {
    constructor() {
        this.name = "ping",
            this.alias = []
    }
    async run(client, msg, args) {
        var apitime = 0;
        var m = await msg.channel.send("sprawdzanie... 🙄");
        const embed = new Discord.RichEmbed()
            .setColor(0x198c41)
            .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL)
            .addField("Latency", Date.now() - msg.createdTimestamp + " ms")
            .addField("API Discord", Math.floor(client.ping) + " ms")
            .addField("API Nougat", "OFFLINE")
            .setFooter("Opóźnienie NouagatAPI jest odświeżane co 12 godzin")
        m.edit(embed);
    }
}
module.exports = ping;
