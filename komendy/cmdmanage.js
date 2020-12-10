const Discord = require("discord.js");
const zabijsie = require("../zabij-sie-db.js");
class cmdmanage {
    constructor(){
        this.name = "cmdmanage",
        this.alias = ["cmdmanager"]
    }
    async run (client, msg, args) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send("co ty próbujesz kasztanie ");
        let cmds = zabijsie.readTableZSDB("./commands.txt");
        //let komne = cmds.split //chwila ide kradnac od trolla
        if (!args[0]) {
            // tutaj jest lista wyłączonych komend? tak
            let lista = ""
            cmds.split("\n").forEach(function(wylaczona) {
                if(msg.guild.id == wylaczona.split(";")[0]) {
                    lista += "Komenda **" + wylaczona.split("-")[1] + "** została wyłączona z powodu **" + wylaczona.split("-")[0].split(";")[1] + "**\n"
                }
            })
            /*let powod = cmds.split(msg.guild.id + ";")[1].split("-")[0];
            let komenda = cmds.split(powod + "-")[1].split("-")[0];*/
            let embed = new Discord.MessageEmbed()
            .setColor(0x198c41)
            .setTitle("Manager komend")
            .setAuthor(msg.guild.name, msg.guild.iconURL)
            .setDescription(lista)
            .setFooter("Wyłączone komendy")
            .setTimestamp();
            msg.channel.send(embed);
        } else if (args[0].toString().toLowerCase() == "wylacz") {
            let komenda = args[1];
            if(komenda == "cmdmanage") return;
            let powod = args.slice(2).join(" ") || "Brak";
            zabijsie.addToTableZSDB("./commands.txt", "\n"+msg.guild.id+";"+powod+"-"+komenda);
            let embed = new Discord.MessageEmbed()
            .setColor(0x198c41)
            .setTitle("Manager komend")
            .setAuthor(msg.guild.name, msg.guild.iconURL)
            .setDescription("Pomyślnie wyłączono komendę **" + komenda + "** :white_check_mark:")
            .addField("Powód", powod)
            .setFooter("Wyłączone komendy")
            .setTimestamp();
            msg.channel.send(embed);
        } else if (args[0].toString().toLowerCase() == "wlacz") {
            let komenda =  args[1];
            // find in table nie dziauala przezeciez let cmda = zabijsie.findInTableZSDB("./commands.txt", msg.guild.id+";"+komenda)
            let powod = ""
            let ok = false
            cmds.split("\n").forEach(function(h) {
                // szukamy powodu dla którego komenda została wcześniej wyłączona
                if(h.includes(msg.guild.id) && h.includes(komenda)) {
                    ok = true
                    powod = h.split(";")[1].split("-")[0]
                }
            })
            if(ok == false) {
                let embed = new Discord.MessageEmbed()
                .setColor(0x198c41)
                .setTitle("Manager komend")
                .setAuthor(msg.guild.name, msg.guild.iconURL)
                .setDescription("Komenda **" + komenda + "** nie jest wyłączona!")
                .setFooter("Włączone komendy")
                .setTimestamp();
                msg.channel.send(embed)
            } else {
                zabijsie.editTableZSDB("./commands.txt", " " , msg.guild.id + ";" + powod + "-" + komenda) //gotowe zobaczmy NAJPIERW REPLACED POTEM REPLACING 
                let embed = new Discord.MessageEmbed()
                .setColor(0x198c41)
                .setTitle("Manager komend")
                .setAuthor(msg.guild.name, msg.guild.iconURL)
                .setDescription("Pomyślnie włączono komendę **" + komenda + "** :white_check_mark:")
                .setFooter("Włączone komendy")
                .setTimestamp();
                msg.channel.send(embed)
            }
            
        }
        
    }
}
module.exports = cmdmanage;