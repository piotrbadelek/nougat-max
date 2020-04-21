const Discord = require("discord.js")
const monodev = new Discord.Attachment('http://83.7.49.211/api/nougay.png');
class mono {
    constructor() {
        this.name = "monodev",
            this.alias = ["mono"]
    }
    async run(client, msg, args) {
        msg.channel.send("Łączenie z NougatAPI...");
        const exampleEmbed = {
            title: 'Monodev - **Pobrane z NougatAPI**',
            image: {
                url: 'http://83.7.49.211/api/mono.png',
            },
            description: 'Monodev'
        };
        msg.channel.send({ files: [monodev], embed: exampleEmbed });
    }
}
module.exports = mono;
