const Discord = require("discord.js");
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
})

client.login("nie kradnij");
