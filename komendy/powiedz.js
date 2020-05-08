const Discord = require("discord.js")
class powiedz {
    constructor() {
        this.name = "powiedz",
            this.alias = ["say"]
    }
    async run(client, msg, args) {
        let join = args.join(" ");
        console.log("say " + join + " - " + msg.author.tag);
        if (msg.member.hasPermission("MANAGE_MESSAGES")) {
            msg.delete();
            msg.channel.send(join);
        }
        else {
            msg.channel.send("Uprawnień pan nie ma!");
        }
    }
}
module.exports = powiedz;
