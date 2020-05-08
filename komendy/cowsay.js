const Discord = require("discord.js")
var kowsej = require("cowsay");
class cowsay {
    constructor() {
        this.name = "cowsay",
            this.alias = ["krowamowi"]
    }
    async run(client, msg, args) {
        let join = args.join(" ");
        if (join.includes("--o")) {
            let res = join.replace("--o", "");
            let smieci = (kowsej.say({
                text: res,
                e: "oO"
            }));
            let embed = new Discord.RichEmbed()
                .setColor(0x198c41)
                .setTitle(`Krowa mówi`)
                .setDescription("```" + smieci + "```");
            msg.channel.send(embed);
            console.log("cowsay");
        }
        else if (join.includes("--xd")) {
            let res = join.replace("--xd", "");
            let smieci = (kowsej.say({
                text: res,
                e: "XD"
            }));
            let embed = new Discord.RichEmbed()
                .setColor(0x198c41)
                .setTitle(`Krowa mówi`)
                .setDescription("```" + smieci + "```");
            msg.channel.send(embed);
            console.log("cowsay");
        }
        else if (join.includes("--ww")) {
            let res = join.replace("--ww", "");
            let smieci = (kowsej.say({
                text: res,
                T: "U"
            }));
            let embed = new Discord.RichEmbed()
                .setColor(0x198c41)
                .setTitle(`Krowa mówi`)
                .setDescription("```" + smieci + "```");
            msg.channel.send(embed);
            console.log("cowsay");
        }
        else if (join.includes("hipopot")) {
            let smieci = (kowsej.say({
                text: "Gratulacje! Odkryłeś sekret w cowsay!\n Oto lista argumentów i jak je używać\n *cowsay <tresc do powiedzenia> <argument>\n --xd\n --ww\n --o\n --de"
            }));
            let embed = new Discord.RichEmbed()
                .setColor(0x198c41)
                .setTitle(`Krowa mówi`)
                .setDescription("```" + smieci + "```");
            msg.channel.send(embed);
            console.log("cowsay");
        }
        else if (join.includes("--de")) {
            let res = join.replace("--de", "");
            let smieci = (kowsej.say({
                text: res,
                e: "XX"
            }));
            let embed = new Discord.RichEmbed()
                .setColor(0x198c41)
                .setTitle(`Krowa mówi`)
                .setDescription("```" + smieci + "```");
            msg.channel.send(embed);
            console.log("cowsay");
        }
        else {
            let smieci = (kowsej.say({
                text: join
            }));
            let embed = new Discord.RichEmbed()
                .setColor(0x198c41)
                .setTitle(`Krowa mówi`)
                .setDescription("```" + smieci + "```");
            msg.channel.send(embed);
            console.log("cowsay");
        }
    }
}
module.exports = cowsay;
