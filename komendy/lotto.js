const Discord = require("discord.js")
const zabijsie = require("../zabij-sie-db.js");
class lotto {
    constructor() {
        this.name = "lotto",
            this.alias = [];
    }

    async run(client, msg, args) {
        function dodajhajs(wygrane) {
            let pieniadze = zabijsie.readTableZSDB("./pieniadze.txt")
            let current = pieniadze.split(msg.author.id + ";")[1].split("-")[0]
            if (pieniadze.includes(msg.author.id)) {
                // użytkownik ma już jakieś pieniądze
                let current = pieniadze.split(msg.author.id + ";")[1].split("-")[0]
                let nowailosc = parseInt(current);

                if (wygrane == 1)
                    nowailosc += 15
                else if (wygrane == 2)
                    nowailosc += 35
                else if (wygrane == 3)
                    nowailosc += 65
                else if (wygrane == 4)
                    nowailosc += 200
                else if (wygrane == 5)
                    nowailosc += 500 // chyba cie cos boli czlowieku   nie chodzi o to że 3 i powyżej sie jeszcze nigdy nie zdarzyly na wygranie 5 jest szansa 1 na milion

                zabijsie.editTableZSDB("./pieniadze.txt", msg.author.id + ";" + nowailosc + "-", msg.author.id + ";" + current + "-") // zmiana ilości
            } else {
                // użytkownik nie ma jeszcze nic
                zabijsie.addToTableZSDB("./pieniadze.txt", "\n" + msg.author.id + ";150-" + msg.author.tag)
            }
        }
        let zakres = 49;
        let l = args;
        let bl = [];

        if (l.length > 5) return msg.channel.send("Możesz podać tylko pięć liczb!");
        if (l.length !== 5) return msg.channel.send("Nie wpisałeś pięciu liczb!");

        for (var i in l) {
            if (l[i] > zakres) return msg.channel.send("Zakres liczb wynosi do " + zakres);
        }
        var takiesame = false;
        let poprzednia;
        let teraz;
        l.forEach(function(xd) {
            teraz = xd
            if(teraz == poprzednia) {
                takiesame = true
            }
            poprzednia = xd
        })

        if (takiesame == true) return msg.channel.send("nie cheatuj");
        for (var i = 0; i < 5; i++) {
            bl[i] = Math.floor(Math.random() * zakres);
        }

        wygrane = getResult(l, bl);
        let wygranetext = "";
        if (wygrane == 0)
            wygranetext = "Nic nie wygrałeś! 😓";
        else if (wygrane == 1)
            wygranetext = "Wygrałeś jedną liczbą! 😑 Przez co wygrywasz 15 NLN! 🎉"
        else if (wygrane == 2)
            wygranetext = "Wygrałeś dwoma liczbami! 😏 Przez co wygrywasz 35 NLN! 🎉"
        else if (wygrane == 3)
            wygranetext = "Wygrałeś trzema liczbami! 😎 Przez co wygrywasz 65 NLN! 🎉"
        else if (wygrane == 4)
            wygrantext = "Wygrałeś czterema liczbami! 😮 Przez co wygrywasz 200 NLN! 🎉"
        else if (wygrane == 5)
            wygranetext = "To niepowtarzalne! 😦 Wygrałeś wszystkimi liczbami! 🤑 Przez co wygrywasz 500 NLN! 🎉"

        if (wygrane !== 0) dodajhajs(wygrane);

        let embed = new Discord.MessageEmbed()
            .setColor(0x198c41)
            .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL)
            .setDescription(wygranetext)
            .addField("Liczby bota", bl.join(", "))
            .addField("Twoje liczby", l.join(", "))
            .setFooter("Ekonomia");
        msg.channel.send(embed);
    }
}

function getResult(l, bl) {
    wygrane = 0;
    for (var i in bl) {
        for (var j in l) {
            if (bl[i] == l[j]) wygrane += 1;
        }
    }
    return wygrane;
}
module.exports = lotto;