const Discord = require("discord.js");
const zabijsie = require("./zabij-sie-db.js");
const Canvas = require('canvas');
const fs = require("fs") // dzien dobry   a no witam
const kolejka = new Discord.Collection();
let komendyialiasy = [] //ok
let cachePieniedzy = []
const client = new Discord.Client({
  disableEveryone: true
});

function updateCache() {
  // aktualizacja cache - zapisuje nowe do pliku
  let pieniadze = zabijsie.readTableZSDB("./pieniadze.txt")
  cachePieniedzy.forEach(function(uz) {
    let currentBal = 0;
    let maPieniadze = false;
    pieniadze.split("\n").forEach(function(pi) {
      if(pi.startsWith(uz.split(";")[0])) {
        maPieniadze = true
        currentBal = pi.split(";")[1].split("-")[0]
      }
    })
    if(maPieniadze == true) {
      zabijsie.editTableZSDB("./pieniadze.txt", uz.split(";")[0] + ";" + (parseInt(currentBal) + parseInt(uz.split(";")[1])), uz.split(";")[0] + ";" + currentBal)
    } else {
      let uzytkownik = client.users.get(uz.split(";")[0])
      zabijsie.addToTableZSDB("./pieniadze.txt", "\n" + uz.split(";")[0] + ";" + uz.split(";")[1] + "-" + uzytkownik.username + "#" + uzytkownik.discriminator)
    }
  })
}

let hh = setInterval(function(){updateCache();}, 600000)

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
  client.user.setActivity(`*help | ${client.guilds.size} serwerów! | Wersja 1.1 Pornograficzny Maks`, { type: "WATCHING" });// evala będzie o wiele łatwiej
})

client.on("ready", () => { 
  console.log(__dirname + "/komendy")
  fs.readdirSync(__dirname + "/komendy/").forEach(function(plik) {
    plik = plik.toString().replace("./", "")  //mogę też jak coś usunac ten folder  komenda is not degined
    let toPush = plik.toString().replace(".js", "") + ";"  // nie trzeba
    if(plik.endsWith(".nieaktualnejs") == true) return;
    if(plik.endsWith(".js") == false) {
      // folder
      fs.readdirSync(__dirname + "/komendy/" + plik + "/").forEach(function(komwfolderze) { 
        toPush = komwfolderze.toString().replace("./", "").replace(".js", "") + ";" //ok
        let kodKomendy = zabijsie.readTableZSDB(__dirname + "/komendy/" + plik + "/" + komwfolderze.toString().replace("./", "")) // daj mi to na razie zrobić potem się tym zajmiemy
        let aliasy = kodKomendy.split("this.alias = [")[1].split("]")[0]
        aliasy.split(", ").forEach(function(alias) {
          toPush += alias.replace(/\"/g, "").split(", ").join(";") + ";"
        }) 
        let a = komendyialiasy.push(toPush)
      })
    } else {
      // jest problem w cmdmangae.js nie tutaj
      let kodKomendy = zabijsie.readTableZSDB(__dirname + "/komendy/" + plik) // czy mogę na razie te aliasy ogarnąć a później się zająć tym
      try {
        let aliasy = kodKomendy.split("this.alias = [")[1].split("]")[0]
        aliasy.split(", ").forEach(function(alias) {
          toPush += alias.replace(/\"/g, "").split(", ").join(";") + ";"
        }) 
      }
      catch(error) {}
      let a = komendyialiasy.push(toPush)
    }
    
    
  })
  console.log("jestem aktywny jako " + client.user.username + "#" + client.user.discriminator); // mogę zrestartować? muszę coś sprawdzić ok nie potrzebowałem edytować i tak już możesz włączyć
  client.user.setActivity(`*help | ${client.guilds.size} serwerów! | Wersja 1.1 Pornograficzny Maks`, { type: "WATCHING" });
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
    if (!cmdh) return undefined; // tylko jest pewien problem, ze komenda moze aliasy posiadac, ok
    // mam pomysł
    // albo muszę to przemyśleć na razie
    let komendy = zabijsie.readTableZSDB("commands.txt");
    let ok = true
    let aliasyKomendy = []
    komendyialiasy.forEach(function(alias) {
      if(alias.includes(cmd.replace(prefix, "") + ";") == true) {
        aliasyKomendy = alias.split(";")
      }
    })
    let powod = ""
    komendy.split("\n").forEach(function(wylKom) {
      if(wylKom.includes(msg.guild.id)) {
        let kom = cmd.replace(prefix, "")
        aliasyKomendy.forEach(function(alias) {
          if(alias == "") {} else {
            if(alias == wylKom.split("-")[1]) {
              console.log("znaleziona komenda wyłączona: " + alias)
              ok = false
              powod = wylKom.split(";")[1].split("-")[0]
            }
          }
        })
      }
    })
    if(ok == true) {
      cmdh.run(client, msg, args, kolejka, ch);
    } else {
      msg.channel.send("Komenda **" + cmd.replace(prefix, "") + "** jest wyłączona!\nPowód: " + powod)
    }
    

    if (cmd === prefix + 'test') {
      msg.reply('Test!');
    }
  }
  if (msg.guild) {
    // pieniądze za pisanie
    let ok = false;
    let ind = 0;
    let uzyt = 0
    cachePieniedzy.forEach(function(uzytkownik) {
      if(uzytkownik.split(";")[0] == msg.author.id.toString()) {
        ok = true
        uzyt = ind
      }
      ind += 1
    })
    if(ok == true) {
      // użytkownik pisał już, zaktualizować mu cache
      let current = parseInt(cachePieniedzy[uzyt].split(";")[1]) // tyle zebrał pieniędzy
      current += 2 // dodaje 2NLN
      cachePieniedzy[uzyt] = msg.author.id + ";" + current.toString();
    } else {
      // jeszcze nie pisał podczas 10 minut
      let a = cachePieniedzy.push(msg.author.id + ";2")
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
client.login("NDMwNDM3MTczMDAzODEyODY3.XvOtrw.Kf6GZVY1_QS-DKug-nZXoqk-18U");
