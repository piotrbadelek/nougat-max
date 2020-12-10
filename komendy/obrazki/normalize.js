const Discord = require("discord.js")
const Canvas = require('canvas');
const Jimp = require('jimp');
class normalize {
    constructor() {
        this.name = "normalizuj",
            this.alias = ["normalize"]
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
                image.normalize()
                    .write('./images/normalize.png')
            })
        setTimeout(hahayes, 3000);
        // Wait for Canvas to load the image
        // Draw a shape onto the main canvas
        function hahayes() {
            const attachment = new Discord.MessageAttachment('./images/normalize.png');

            msg.channel.send(`Oto twój obrazek!`, attachment);
            console.log("normalize");
        }
    }
}
module.exports = normalize;
