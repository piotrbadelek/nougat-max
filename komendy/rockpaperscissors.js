const Discord = require("discord.js")
const zabijsie = require("../zabij-sie-db.js");
class rockpaperscissors {
    constructor() {
        this.name = "rock-paper-scissors",
            this.alias = ["rps"]
    }
    async run(client, msg, args) {
        let komputer = Math.floor((Math.random() * 3) + 1);
        let join = args.join(" ");
        let wynik = 0;
        if (komputer == 1) {
            msg.channel.send("Komputer wybiera: Nożyce");
        }
        if (komputer == 2) {
            msg.channel.send("Komputer wybiera: Papier");
        }
        if (komputer == 3) {
            msg.channel.send("Komputer wybiera: Kamień");
        }
        // 1 = Nożyce
        if (join == 1) {
            if (komputer == 1) {
                wynik = 1;
            }
            if (komputer == 2) {
                wynik = 2;
            }
            if (komputer == 3) {
                wynik = 0;
            }
        }
        // 2 = Papier
        if (join == 2) {
            if (komputer == 1) {
                wynik = 0;
            }
            if (komputer == 2) {
                wynik = 1;
            }
            if (komputer == 3) {
                wynik = 2;
            }
        }
        // 3 = Kamień
        if (join == 3) {
            if (komputer == 1) {
                wynik = 0;
            }
            if (komputer == 2) {
                wynik = 2;
            }
            if (komputer == 3) {
                wynik = 1;
            }
        }
        if (wynik == 0) {
            msg.channel.send(msg.author.username + ", przegrałeś!");
        }
        if (wynik == 1) {
            msg.channel.send(msg.author.username + ", remis!");
        }
        if (wynik == 2) {
            let cashcash = Math.floor((Math.random() * 30) + 10);
            let pieniadze = zabijsie.readTableZSDB("./pieniadze.txt")
            if (pieniadze.includes(msg.author.id)) {
                // użytkownik ma już jakieś pieniądze
                let current = pieniadze.split(msg.author.id + ";")[1].split("-")[0]
                let nowailosc = parseInt(current) +  cashcash// 2 to liczba NLN dodawanych za każdym wpisem
                zabijsie.editTableZSDB("./pieniadze.txt", msg.author.id + ";" + nowailosc + "-", msg.author.id + ";" + current + "-") // zmiana ilości
            } else {
                // użytkownik nie ma jeszcze nic
                zabijsie.addToTableZSDB("./pieniadze.txt", "\n" + msg.author.id + ";15-" + msg.author.tag)
            }
            msg.channel.send(msg.author.username + ", wygrałeś " + cashcash + "NLN !");
        }
    }
}
module.exports = rockpaperscissors;
