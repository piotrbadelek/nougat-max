const scalc = require('scalc')
const Discord = require("discord.js")
class calc {
    constructor() {
        this.name = "calc",
            this.alias = ["kalkulator", "calculator"]
    }
    async run(client, msg, args) {
        let join = args.join(" ");
        var result = scalc(join)
        if (result == undefined){
            result = "Złe wyrażenie podałeś!"
        }
        let embed = new Discord.MessageEmbed()
            .setColor(0x198c41)
            .setTitle(`Kalkulator`)
            .setDescription(result);
        msg.channel.send(embed);
        console.log("kalkulator");
    }
}
module.exports = calc;
