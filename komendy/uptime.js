const Discord = require("discord.js")
class uptime {
    constructor() {
        this.name = "uptime",
            this.alias = ["staty"]
    }
    async run(client, msg, args) {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        seconds = Math.floor(seconds)
        let uptajm = `${days} dni, ${hours} godzin, ${minutes} minut oraz ${seconds} sekund`;
        let embed = new Discord.RichEmbed()
            .setColor(0x198c41)
            .setTitle(`Uptime Bota`)
            .setDescription(uptajm);
        msg.channel.send(embed);
    }
}
module.exports = uptime;
