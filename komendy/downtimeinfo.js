const Discord = require("discord.js")
class downtimeinfo {
    constructor() {
        this.name = "downtimeinfo",
            this.alias = ["downtime"]
    }
    async run(client, msg, args) {
        let id = ["284980083104415746", "347736225873920021", "300346870574612491"]
        if (id.includes(msg.author.id)) {
            let embedowanie = new Discord.RichEmbed()
                .setColor(0x198c41)
                .setTitle(`:warning: Wiadomość od New Nougat Interactive :warning: `)
                .setDescription(args.slice(0).join(" "));
                client.guilds.array().forEach((guild) => {
                    let channels = guild.channels.filter((channel) => {
                        return channel.type === 'text' && channel.permissionsFor(guild.me).has(['VIEW_CHANNEL', 'SEND_MESSAGES']);
                    });
                    if (channels.array().length > 0) {
                        channels = channels.sort((a, b) => {
                            return a.calculatedPosition - b.calculatedPosition;
                        }).array();
                        channels[0].send(embedowanie).catch(e => console.error(e));
                    }
                });
        }
    }
}
module.exports = downtimeinfo;
