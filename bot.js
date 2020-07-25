const { Client } = require("discord.js");
const config = require("./config.json");
const client = new Client({
    disableEveryone: true
});

client.once("ready", () => {
    console.log("Połączono! "+client.user.tag+" jest aktywny!");
});

client.login(config.token);