const Discord = require("discord.js")
const Canvas = require('canvas');
const Jimp = require('jimp');
class odswiatlo {
    constructor() {
        this.name = "odswiatlo",
            this.alias = ["dark", "brightnessminus", "pociemnij"]
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
                    image.brightness(-0.6) 
                    .write('./images/swiatlo.png')
            })
            setTimeout(hahayes, 1500,);
        // Wait for Canvas to load the image
        // Draw a shape onto the main canvas
        function hahayes(){
            const attachment = new Discord.Attachment('./images/swiatlo.png');

            msg.channel.send(`Oto twój obrazek!`, attachment);
            console.log("swiatlominus");
        }
    }
}
module.exports = odswiatlo;
