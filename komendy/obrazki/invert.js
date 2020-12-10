const Discord = require("discord.js")
const Canvas = require('canvas');
const Jimp = require('jimp');
class invert {
    constructor() {
        this.name = "invert",
            this.alias = ["odwrockolor"]
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
                image.invert()
                    .write('./images/swiatlo.png')
            })
        setTimeout(hahayes, 3000);
        // Wait for Canvas to load the image
        // Draw a shape onto the main canvas
        function hahayes() {
            const attachment = new Discord.MessageAttachment('./images/swiatlo.png');

            msg.channel.send(`Oto twój obrazek!`, attachment);
            console.log("invert");
        }
    }
}
module.exports = invert;
