const Discord = require("discord.js") // powiedz.js
var kowsej = require("cowsay");
class cowthink {
    constructor() {
        this.name = "cowthink",
            this.alias = ["krowamysli"]
    }
    async run(client, msg, args) {
        let join = args.join(" ");
        if (join.includes("--o")) {
            let res = join.replace("--o", "");
            let smieci = (kowsej.think({
                text: res,
                e: "oO"
            }));
            let embed = new Discord.MessageEmbed()
                .setColor(0x198c41)
                .setTitle(`Krowa myśli`)
                .setDescription("```" + smieci + "```");
            msg.channel.send(embed);
            console.log("cowthink");
        }
        else if (join.includes("--xd")) {
            let res = join.replace("--xd", "");
            let smieci = (kowsej.think({
                text: res,
                e: "XD"
            }));
            let embed = new Discord.MessageEmbed()
                .setColor(0x198c41)
                .setTitle(`Krowa myśli`)
                .setDescription("```" + smieci + "```");
            msg.channel.send(embed);
            console.log("cowthink");
        }
        else if (join.includes("--ww")) {
            let res = join.replace("--ww", "");
            let smieci = (kowsej.think({
                text: res,
                T: "U"
            }));
            let embed = new Discord.MessageEmbed()
                .setColor(0x198c41)
                .setTitle(`Krowa myśli`)
                .setDescription("```" + smieci + "```");
            msg.channel.send(embed);
            console.log("cowthink");
        }
        else if (join.includes("hipopot")) {
            let smieci = (kowsej.think({
                text: "Gratulacje! Odkryłeś sekret w cowthink!\n Oto lista argumentów i jak je używać\n *cowthink <tresc do pomyślenia> <argument>\n --xd\n --ww\n --o\n --de"
            }));
            let embed = new Discord.MessageEmbed()
                .setColor(0x198c41)
                .setTitle(`Krowa myśli`)
                .setDescription("```" + smieci + "```");
            msg.channel.send(embed);
            console.log("cowthink");
        }
        else if (join.includes("--de")) {
            let res = join.replace("--de", "");
            let smieci = (kowsej.think({
                text: res,
                e: "XX"
            }));
            let embed = new Discord.MessageEmbed()
                .setColor(0x198c41)
                .setTitle(`Krowa myśli`)
                .setDescription("```" + smieci + "```");
            msg.channel.send(embed);
            console.log("cowthink");
        }
        else {
            let smieci = (kowsej.think({
                text: join
            }));
            let embed = new Discord.MessageEmbed()
                .setColor(0x198c41)
                .setTitle(`Krowa myśli`)
                .setDescription("```" + smieci + "```");
            msg.channel.send(embed);
            console.log("cowthink");
        }
    }
}
module.exports = cowthink;
