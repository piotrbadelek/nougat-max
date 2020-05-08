const Discord = require("discord.js")
class bulkdelete {
    constructor() {
        this.name = "bulkdelete",
            this.alias = ["duzousun"]
    }
    async run(client, msg, args) {
        if (msg.member.hasPermission('MANAGE_MESSAGES')) {
            let ile = args[0]
            if (ile > 100) {
                msg.channel.send("Możesz usuwać maksymalnie 100 wiadomości na raz!");
            }
            else {
                msg.channel.bulkDelete(ile).then(() => {
                    msg.channel.send("Usunięto wiadomości!").then(msg => msg.delete(3000));
                });
            }
        }
        else {
            msg.channel.send("A co chce pan usuwać bez premisji?");
        }
    }
}
module.exports = bulkdelete;
