const Discord = require("discord.js")
class kick {
    constructor() {
        this.name = "kick",
            this.alias = ["kick", "kopaswdupe"]
    }
    async run(client, msg, args) {
        if (msg.member.hasPermission("KICK_MEMBERS")){
            var member = msg.mentions.members.first();
            // Kick
            member.kick().then((member) => {
                // Successmessage
                msg.channel.send(":wave: " + member.displayName + " został wyrzucony za swoje złe czyny :point_right: :ok_hand:");
            }).catch(() => {
                // Failmessage
                msg.channel.send("Houston, mamy problem.");
            });
        }
        else{
            msg.channel.send("A co chce pan zbanować? Właściciela? (ERROR: Użytkownik ma wyszszą rangę niż ty)");
        }
    }
}
module.exports = kick;
