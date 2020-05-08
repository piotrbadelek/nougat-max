const Discord = require("discord.js")
class nougatscript {
    constructor() {
        this.name = "nougatscript",
            this.alias = ["nsstart", "npm test"]
    }
    async run(client, msg, args) {
        function extractFirstText(str) {
            const matches = str.match(/"(.*?)"/);
            return matches
                ? matches[1]
                : str;
        }
        let join = args.join(" ");
        let outputer = "$\n";
        if (join.includes("trace")) {
            let proses = extractFirstText(join);
            outputer = outputer + "trace: " + proses
        }
        else if (join.includes("msg.reply")) {
            let proses = extractFirstText(join);
            msg.channel.send(proses);
        }
        else if (join.includes("msg.delete")) {
            msg.delete();
        }
        else {
            outputer = outputer + 'Nie znaleziono komendy. Obecnie obsługiwane komendy to: trace("tekst");  msg.reply("tekst"); msg.delete();'
        }
        if (outputer != "$\n") {
            let embed = new Discord.RichEmbed()
                .setColor(0x198c41)
                .setTitle(`NougatScript`)
                .setDescription("```" + outputer + "```")
            console.log("nołgatskript");
            msg.channel.send(embed);
        }
    }
}
module.exports = nougatscript;
