const Discord = require("discord.js");
const ms = require("ms");
class tempmute {
    constructor() {
        this.name = "tempmute",
            this.alias = ["tempmute", "UciszSieBlagamCie"]
    }
    async run(client, msg, args) {

        //!tempmute @user 1s/m/h/d

        let tomute = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
        if (!tomute) return msg.reply("Houston, mamy problem (ERROR: Nie znaleziono osoby)");
        if (tomute.hasPermission("MANAGE_MESSAGES")) return msg.reply("A kogo ty chcesz wyciszyć? Właściciela? (ERROR: Osoba ma zbyt wysokie uprawnienia)");
        let muterole = msg.guild.roles.find(`name`, "muted");
        //start of create role
        msg.channel.send("Proszę czekać, dodawanie roli...");
        if (!muterole) {
            try {
                muterole = await msg.guild.createRole({
                    name: "muted",
                    color: "#000000",
                    permissions: []
                })
                msg.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    });
                });
            } catch (e) {
                console.log(e.stack);
            }
        }
        //end of create role
        let mutetime = args[1];
        let mutetype2 = args[2];
        console.log("UWAGA" + mutetype2);
        if (mutetype2 == "m") {
            console.log("memems");
            mutetime = mutetime * 60000
        } // gratulacje uzytkowniku   wygrałeś affon sześć es plejstejszyn czterylub samsung galaxy es szesc    zdałem sobie właśnie sprawe jak stare te telefony są X D
        // a ogółem sobie teraz rysuje avatar w paincie ok
        if (mutetype2 == "h") {
            console.log("hehes");
            mutetime = mutetime * 3600000
        }
        if (mutetype2 == "mh") {
            msg.channel.send("Proszę pana to godziny czy minuty?");
        }
        if (mutetype2 == "hm") {
            msg.channel.send("Proszę pana to godziny czy minuty?");
        }
        console.log(mutetype2);
        if (!mutetime) return msg.reply("Nie podał pan na ile wyciszyć. (ERROR: Nie podano na ile wyciszyć użytkownika)");
        await (tomute.addRole(muterole.id));
        let embed = new Discord.RichEmbed()
        .setColor(0x198c41)
        .setTitle(`Moderacja / Tempmute`)
        .setDescription("<@${tomute.id}> został wyciszony na ${ms(ms(mutetime / 60000))}` + mutetype2");
        msg.channel.send(embed);

        setTimeout(function () {
            tomute.removeRole(muterole.id);
            msg.channel.send(`<@${tomute.id}> już może rozmawiać!`);
        }, (mutetime));
    }
}
module.exports = tempmute;