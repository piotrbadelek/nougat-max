const fs = require("fs");
const Ascii = require("ascii-table");

var table = new Ascii("Komendy");
table.setHeading("Komenda", "Status");

module.exports = class handler {
    constructor(data = {}) {
        if (!data.dir) return console.error("Nie podałeś folderu z komendami!");
        if (!data.prefix) return console.error("Nie podałeś prefixu!");
        this.dir = data.dir;
        this.prefix = data.prefix;
        this.load(this.dir);
    }

    load(dir) {
        var cmds = new Map();
        var aliases = new Map();
        fs.readdirSync(dir).forEach(folder => {
            const commands = fs.readdirSync(`${dir}/${folder}/`)
                .filter(f => f.endsWith(".js"));
            for (var cmd of commands) {
                const file = require(`${dir}/${folder}/${cmd}`);
                const command = new file();
                if (!command.name || (!command.aliases || !Array.isArray(command.aliases))) {
                    console.error(`Nie podano nazwy komendy, bądź jej aliasów w pliku ${dir}/${folder}/${cmd}`);
                    table.addRow(folder+"/"+cmd, "❤");
                    continue;
                } else {
                    cmds.set(command.name, command);
                    for (var alias of command.aliases) {
                        aliases.set(alias, command.name);
                    }
                    table.addRow(command.name, "💚");
                }
            }
        });
        this.cmds = cmds;
        this.aliases = aliases;

        console.log(table.toString());
    }

    get(string) {
        if (!string) return;
        if (Array.from(string)[0] !== this.prefix) return;
        const command = string.slice(this.prefix.length);
        let cmd = this.cmds.get(command);
        if (!cmd) cmd = this.cmds.get(this.aliases.get(command));
        if (cmd) return cmd;
    }
}