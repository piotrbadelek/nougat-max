const Discord = require("discord.js")
const Canvas = require('canvas');
const Jimp = require('jimp');
class deepfry {
    constructor() {
        this.name = "deepfry",
            this.alias = ["dipfri", "fry"]
    }
    async run(client, msg, args) {
        var Attachment = (msg.attachments).array();
        const channel = msg.channel.id
        if (!channel) return;
        if (!Attachment[0]) {
            msg.channel.send("Nie podałeś obrazka!");
            return;
        }
        var pixelValue = Math.floor(Math.random() * 2 + 2)
        Jimp.read(Attachment[0].url)
            .then(image => {
                image
                    .pixelate(pixelValue)
                    .contrast(0.95)
                    .write('./images/deepfry.png')
            })
            setTimeout(hahayes, 1500,);
        // Wait for Canvas to load the image
        // Draw a shape onto the main canvas
        function hahayes(){
            const attachment = new Discord.Attachment('./images/deepfry.png');

            msg.channel.send(`Oto twój obrazek!`, attachment);
            console.log("dipfri");
        }
    }
}
module.exports = deepfry;
