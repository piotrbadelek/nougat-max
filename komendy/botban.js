const Discord = require("discord.js");
const fs = require("fs");
class botban {
    constructor(){
        this.name = "botban",
        this.alias = ["bban", "bdzban"]
    }
    async run (client, msg, args) {
        let id = ["284980083104415746", "347736225873920021", "300346870574612491"]
        if (id.includes(msg.author.id)) {
            const banU = client.users.get(args[0]);
            const reason = args.slice(1).join(" "); // planujecie zrobić bany w jsonie?
            client.botbans[banU.id] = {
                ban: true,
                reason: reason
            };
            fs.writeFileSync("../botbans.json", JSON.stringify(client.botbans), (err) => {
                if (err) console.error(err);
            })
            msg.channel.send("<@"+banU.id+"> został pomyślnie zbanowany! :tada:");
        } else {
            return msg.channel.send("A chcesz gazem pieprzowym?") // A chcesz gazem pieprzowym?
        }

    }
}
module.exports = botban;