const fs = require("fs");
const AsciiTable = require('ascii-table');
class handler {
    constructor(Data = {}) {
        if (!Data.directory) return console.error('Nie podałeś folderu debilu');
        if (!Data.prefix) return console.error('Nie podałeś prefixów debilu');
        this.folder = Data.directory;
        this.prefix = Data.prefix;
        this.load(Data.directory);
    }
    load(folder){
        const cmds = new Map();
        const aliases = new Map();

        const files = fs.readdirSync(folder);
        if(files.length === 0) return console.log('Brak komend do załadowania!');
        files.filter(f => fs.statSync(folder + f).isDirectory())
            .forEach(nested => fs.readdirSync(folder + nested).forEach(f => files.push(nested + '/' + f)));
        const jsFiles = files.filter(f => f.endsWith('.js'));
        console.log(`Znaleziono ${jsFiles.length} komend do załadowania!`);

        this.table = new AsciiTable('');
        this.table.setHeading('Komenda','Status');

        for (const f of jsFiles) {
            const file = require(folder + f);
            const cmd = new file();

            const name = cmd.name;
            cmds.set(name, cmd);
            for (const alias of cmd.alias) {
                aliases.set(alias, name);
            }
            this.table.addRow(name, '✅');
        }

        //             this.table.addRow(name, '✅');

        console.log(this.table.toString());
        this.cmds = cmds;
        this.aliases = aliases;
        console.log(`Proszę czekać, łączenie`);
    }

    get(string){
        if(!string) return;
        let prefix = this.prefix;
        let prefixExists = true;
        const command = string.substring(prefix.length);
        let cmd = this.cmds.get(command);
        if (!cmd) {
            const alias = this.aliases.get(command);
            if (!alias) return;
            cmd = this.cmds.get(alias);
        }
        return cmd;
    }
}
module.exports = { handler }
