const Discord = require("discord.js")
var figlet = require('figlet');
class ascii {
    constructor() {
        this.name = "ascii",
            this.alias = ["asci"]
    }
    async run(client, msg, args) {
        console.log("ASCII");
        let smieci = args.join(" ");
        smieci = smieci.split(" ").join("\n")
        let ohshit = smieci.toLowerCase();
        if (ohshit.includes("Never gonna") || ohshit.includes("gonna give")  || ohshit.includes("gonna") || ohshit.includes("nexer gona") || ohshit.includes("newel gona giw ju app")){
            figlet("spadaj", function (err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                console.log(data)
                let embed = new Discord.MessageEmbed()
                    .setColor(0x198c41)
                    .setTitle(`ASCII`)
                    .setDescription("```yaml\n" + data + "```");
                msg.channel.send("```yaml\n" + data + "```");
            });
        }
        else{
            figlet(smieci, function (err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                console.log(data)
                let embed = new Discord.MessageEmbed()
                    .setColor(0x198c41)
                    .setTitle(`ASCII`)
                    .setDescription("```yaml\n" + data + "```");
                msg.channel.send("```yaml\n" + data + "```");
            });
        }
    }
}
module.exports = ascii;
