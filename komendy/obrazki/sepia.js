const Discord = require("discord.js")
const Canvas = require('canvas');
const Jimp = require('jimp');
class sepia {
    constructor() {
        this.name = "sepia",
            this.alias = ["braz"]
    }
    async run(client, msg, args) {
        var Attachment = (msg.attachments).array();
        const channel = msg.channel.id
        if (!channel) return;
        if (!Attachment[0]) {
            msg.channel.send("Nie podałeś obrazka!");
            return;
        }
        msg.channel.send("Proszę czekać, przetwarzanie obrazka...");
        Jimp.read(Attachment[0].url)
            .then(image => {
                image.sepia()
                    .write('./images/sepia.png')
            })
        setTimeout(hahayes, 5000);
        // Wait for Canvas to load the image
        // Draw a shape onto the main canvas
        function hahayes() {
            const attachment = new Discord.Attachment('./images/sepia.png');

            msg.channel.send(`Oto twój obrazek!`, attachment);
            console.log("sepia");
        }
    }
}
module.exports = sepia;
