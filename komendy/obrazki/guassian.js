const Discord = require("discord.js")
const Canvas = require('canvas');
const Jimp = require('jimp');
class guassian {
    constructor() {
        this.name = "blur",
            this.alias = ["guassian"]
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
                image.blur(8)
                    .write('./images/blur.png')
            })
        setTimeout(hahayes, 5000);
        // Wait for Canvas to load the image
        // Draw a shape onto the main canvas
        function hahayes() {
            const attachment = new Discord.Attachment('./images/blur.png');

            msg.channel.send(`Oto twój obrazek!`, attachment);
            console.log("blur");
        }
    }
}
module.exports = guassian;
