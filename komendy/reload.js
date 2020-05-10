const Discord = require("discord.js");
class reload {
    constructor(){
        this.name = "reload",
        this.alias = ["restart"]
    }
    async run (client, msg, args, active, ch) {
        let id = ["284980083104415746", "347736225873920021", "300346870574612491"]
        if(!id.includes(msg.author.id)) return msg.channel.send("próbuj dalej XD");
        if(!args[0]) return msg.channel.send("no prosze pana, ale komendy to pan nie podał.");
        try {
            delete require.cache[require.resolve(`./${args[0]}.js`)];
            ch.cmds.delete(args[0])
            const pull = require(`./${args[0]}.js`);
            const file = new pull();
            ch.cmds.set(args[0], file);
            const embed = new Discord.RichEmbed()
            .setColor(0x198c41)
            .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL)
            .setTitle("Manager komend")
            .setDescription("Pomyślnie zrestartowano komendę "+file.name+" :white_check_mark:")
            .setFooter("Globalne zrestartowanie komendy")
            .setTimestamp();
            return msg.channel.send(embed);
        } catch (e) {
            return msg.channel.send("wystąpił błąd: \`\`\`"+e+"\`\`\`")
        }
    }
}
module.exports = reload;