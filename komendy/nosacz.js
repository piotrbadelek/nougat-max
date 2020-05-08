const Discord = require("discord.js")
const http = require('http');
const fs = require('fs');
class nosacz {
    constructor() {
        this.name = "nosacz",
            this.alias = ["janusz"]
    }
    async run(client, msg, args) {
        msg.channel.send("**Pobrane z JanuszAPI:**", { files: ["http://szprinktrap.ddns.net:1410/index.png"] });
    }
}
module.exports = nosacz;
