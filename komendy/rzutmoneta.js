const Discord = require("discord.js")
class rzutmoneta {
    constructor() {
        this.name = "rzutmoneta",
            this.alias = ["coinflip"]
    }
    async run(client, msg, args) {
        let i = Math.floor(Math.random() * 10);
        if (i > 5) {
            let embed = new Discord.MessageEmbed()
                .setColor(0x198c41)
                .setTitle(`Rzut Monetą`)
                .setDescription("Wypadła reszka!");
            msg.channel.send(embed);
        }
        else {
            let embed = new Discord.MessageEmbed()
                .setColor(0x198c41)
                .setTitle(`Rzut Monetą`)
                .setDescription("Wypadł orzeł!");
            msg.channel.send(embed);
        }
        console.log("rzut moneto");
    }
}
module.exports = rzutmoneta;
