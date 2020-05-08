const Discord = require("discord.js");
const zabijsie = require("./zabij-sie-db.js");
const Canvas = require('canvas');
const client = new Discord.Client({
  disableEveryone: true
});
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 90;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px ubuntu`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

client.botbans = require("./botbans.json")

const { handler } = require("./handler.js");
const prefix = '*';
const ch = new handler({
  directory: __dirname + "/komendy/",
  prefix: prefix
})
const active = new Map();
// pieniazde eval EVAL EVAL EVAL EVAL EVAL EVAL E ok js js js js js js co wy odwalacie XD
// dobra a tak serio pzpl zrób plik jak go nazwac    help trzeba zaaktualizowac, jezu zarazm ja to zrobie ale daj mi zjesc a nie tak jak zawsze eval.js do komend
// komende eval a.
client.on('guildCreate', serw => { // kiedyś z tego wyraz wyjdzie, na razie mamy "er"" XD   ja to moge zrobic   ok                               ok                           ok
  console.log("dołączono na: " + serw.name) //e // kto tu dał to "e" XDDD kolejna pamiatka :thumbsup:   ja dalem e
  client.user.setActivity(`*help | ${client.guilds.size} serwerów! Jadę pociągiem | Wersja 1.1 Idiotyczna Peppa`, { type: "WATCHING" });// evala będzie o wiele łatwiej
})

client.on("ready", () => {
  console.log("jestem aktywny jako " + client.user.username + "#" + client.user.discriminator);
  // client.guilds.size + 10000000 XDD
  // dobra teraz musimy sprzedac dane osobowe
  // oh no
  // ok ja mogę sprzedać
  client.user.setActivity(`*help | ${client.guilds.size} serwerów! Jadę pociągiem  | Wersja 1.1 Idiotyczna Peppa | Ubuntu 20.04`, { type: "WATCHING" });
});

client.on("message", async msg => {
  if (msg.author.bot) return undefined;
  if (msg.content.startsWith(prefix) && msg.guild) {

    /*if (!client.botbans[msg.author.id]) client.botbans[msg.author.id] = {
      ban: false,
      reason: null
    }*/

    let bans = zabijsie.readTableZSDB("./botbans.json")
    try {
      bans = JSON.parse(bans)
      for(let i in bans) {
        if(msg.author.id == i) {
          return; 
        }
      }
    }
    catch(err) {console.log(err)}


    const msgArray = msg.content.split(" ");
    const cmd = msgArray[0];
    const args = msgArray.slice(1);
    //r // kto tu dał te r XDDDDDDDDD to bedzie nasza pamiatka to r tak
    const cmdh = ch.get(cmd);
    if (!cmdh) return undefined;

    cmdh.run(client, msg, args, active);

    if (cmd === prefix + 'test') {
      msg.reply('Test!');
    }
  }
  if (msg.guild) {
    // pieniądze za pisanie
    let pieniadze = zabijsie.readTableZSDB("./pieniadze.txt")
    if (pieniadze.includes(msg.author.id)) {
      // użytkownik ma już jakieś pieniądze
      let current = pieniadze.split(msg.author.id + ";")[1].split("-")[0]
      let nowailosc = parseInt(current) + 2 // 2 to liczba NLN dodawanych za każdym wpisem
      zabijsie.editTableZSDB("./pieniadze.txt", msg.author.id + ";" + nowailosc + "-", msg.author.id + ";" + current + "-") // zmiana ilości
    } else {
      // użytkownik nie ma jeszcze nic
      zabijsie.addToTableZSDB("./pieniadze.txt", "\n" + msg.author.id + ";2-" + msg.author.tag)
    }
  }
})
client.on("guildCreate", guild => {
  let embedJoin = new Discord.RichEmbed()
      .setColor(0x198c41)
      .setTitle(`Dziękuję za dodane mnie na serwer! :smile: `)
      .setDescription("Aby zobaczyć listę moich komend, wpisz *help!\nNougat jest hostowany na domowym komputerze, dlatego jest wyłączany w nocy")
      .addField("New Nougat Interactive 2020","Made with :heart: in Greenland");
  let channelID;
  let channels = guild.channels;
  channelLoop:
  for (let c of channels) {
    let channelType = c[1].type;
    if (channelType === "text") {
      channelID = c[0];
      break channelLoop;
    }
  }
  let channel = client.channels.get(guild.systemChannelID || channelID);
  channel.send(embedJoin);
});
client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'member-log');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./bestfucks.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height); // 'CHOC NA GLOSOWY
 // widze ze tutaj sie dzieje ostre kopiowańsko xd xD
	// Slightly smaller text placed above the member's display name
	ctx.font = '28px ubuntu';
	ctx.fillStyle = '#ffffff';
  ctx.fillText('Witaj na serwerze,', canvas.width / 2.5, canvas.height / 3.5);
  ctx.font = '7px ubuntu';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Bot Nougat / New Nougat Interactive', canvas.width / 2.5, canvas.height -25);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.6);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Witaj na serwerze, ${member}!`, attachment);
});

<<<<<<< Updated upstream
client.login("haha nie");
=======
// a i cowsay help poprosze zrobic
>>>>>>> Stashed changes
