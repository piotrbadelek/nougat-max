const Discord = require("discord.js");
const zabijsie = require("./zabij-sie-db.js");
const client = new Discord.Client({
  disableEveryone: true
});

const { handler } = require("./handler.js");
const prefix = '*';
const ch = new handler({
    directory: __dirname + "/komendy/",
    prefix: prefix
})

client.on("ready", () => {
    console.log("jestem aktywny jako "+client.user.username+"#"+client.user.discriminator);
    client.user.setActivity("co to pronhub", {type: "WATCHING"});
});

client.on("message", async msg => {
    if(msg.author.bot) return undefined;
    if(msg.content.startsWith(prefix) && msg.guild) {

      const msgArray = msg.content.split(" ");
      const cmd = msgArray[0];
      const args = msgArray.slice(1);

      const cmdh = ch.get(cmd);
      if(!cmdh) return undefined;

      cmdh.run(client, msg, args);

      if (cmd === prefix + 'test') {
        msg.reply('Test!');
      }
    }
    if(msg.guild) {
      // pieniądze za pisanie
      let pieniadze = zabijsie.readTableZSDB("./pieniadze.txt")
      if(pieniadze.includes(msg.author.id)) {
        // użytkownik ma już jakieś pieniądze
        let current = pieniadze.split(msg.author.id + ";")[1].split("-")[0]
        let nowailosc = parseInt(current) + 2 // 2 to liczba NLN dodawanych za każdym wpisem
        zabijsie.editTableZSDB("./pieniadze.txt", msg.author.id + ";" + nowailosc + "-", msg.author.id + ";" + current + "-") // zmiana ilości
      } else {
        // użytkownik nie ma jeszcze nic
        zabijsie.addToTableZSDB("./pieniadze.txt", "\n" + msg.author.id + ";2-" + msg.author.tag)
        zabijsie.addToTableZSDB("./pieniadze-rur.txt", "\n" + msg.author.id + ";4-" + msg.author.tag)
      }
    }
})

client.login("a spadaj");
