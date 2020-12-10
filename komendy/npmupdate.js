const Discord = require("discord.js")
const shell = require('shelljs')
class npmupdater {
    constructor() {
        this.name = "npmupdate",
        this.alias = ["update"]
    }
    async run(client, msg, args) {
        msg.channel.send("Aktualizuje Paczki NPM, proszę czekać (updnpm.sh)");
        shell.exec('/home/piotr/Dokumenty/nougat-max/updnpm.sh')
    }
}
module.exports = npmupdater;
