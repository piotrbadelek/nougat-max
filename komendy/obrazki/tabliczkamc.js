const Discord = require("discord.js")
const Canvas = require('canvas');
class tabliczkamc {
  constructor(){
    this.name = "tabliczka",
    this.alias = ["tabliczkamc"]
  }
  async run (client, msg, args) {
    const applyText = (canvas, text) => {
        const ctx = canvas.getContext('2d');
    
        // Declare a base size of the font
        let fontSize = 60;
    
        do {
            // Assign the font to the context and decrement it so it can be measured again
            ctx.font = `${fontSize -= 2}px ubuntu`;
            // Compare pixel width of the text to the canvas minus the approximate avatar size
        } while (ctx.measureText(text).width > canvas.width);
    
        // Return the result to use in the actual canvas
        return ctx.font;
    };
      console.log("co")
    const channel = msg.channel.id;
    let join = args.join(" ");

	const canvas = Canvas.createCanvas(300, 400);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./img/mcsign.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#000000';
	ctx.strokeRect(0, 0, canvas.width, canvas.height); // 'CHOC NA GLOSOWY
 // widze ze tutaj sie dzieje ostre kopiowańsko xd xD
	// Slightly smaller text placed above the member's display name
	ctx.font = '10px ubuntu';
	ctx.fillStyle = '#000000';
    ctx.fillText('Bot Nougat / New Nougat Interactive', canvas.width / 2.5, canvas.height - 10);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${join}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${join}`, 10, 50);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();


	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	msg.channel.send(`Oto twój obrazek!`, attachment);
    console.log("minkruft tabliczka");
  }
}
module.exports = tabliczkamc;
