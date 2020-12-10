const Discord = require("discord.js")
const Canvas = require('canvas');
class sztrecz {
  constructor(){
    this.name = "strech",
    this.alias = ["sztrecz", "stretch"]
  }
  async run (client, msg, args) {
    var Attachment = (msg.attachments).array();
    const channel = msg.channel.id
    if (!channel) return;
    if (!Attachment[0]){
        msg.channel.send("Nie podałeś obrazka!");
        return;
    }
    const background = await Canvas.loadImage(Attachment[0].url);
    var width = background.naturalWidth * 3; // this will be 300
    var height = background.naturalHeight; // this will be 400
	const canvas = Canvas.createCanvas(width, height);
	const ctx = canvas.getContext('2d');

	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Wait for Canvas to load the image
	// Draw a shape onto the main canvas
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	msg.channel.send(`Oto twój obrazek!`, attachment);
    console.log("sztrecz");
  }
}
module.exports = sztrecz;
