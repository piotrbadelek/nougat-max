const { Client } = require("discord.js");
const config = require("./config.json");
const client = new Client({
    disableEveryone: true
});

const CommandHandler = require("./handlers/command");
const handler = new CommandHandler({
    dir: __dirname + "/commands/",
    prefix: config.prefix
});


client.once("ready", () => {
    console.log("Połączono! "+client.user.tag+" jest aktywny!");
});

client.on("message", async (msg) => {
    if (msg.author.type == "bot") return;
    if (msg.channel.type == "dm" || !msg.guild) return;

    const msgArray = msg.content.split(" ");
    const cmd = msgArray[0];
    const args = msgArray.slice(1);

    const command = handler.get(cmd);
    if (!command) return;

    command.run(client, msg, args);
});

client.login(config.token);