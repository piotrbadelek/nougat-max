const Discord = require("discord.js")
const zabijsie = require("../zabij-sie-db.js");
var dateObj = new Date();
class workwork {
    constructor() {
        this.name = "praca",
            this.alias = ["pracowanie"]
    }
    async run(client, msg, args) {
        function addmoni(moni) {
            // użytkownik ma już jakieś pieniądze
            let pieniadze = zabijsie.readTableZSDB("./pieniadze.txt")
            if (pieniadze.includes(msg.author.id)) {
                // użytkownik ma już jakieś pieniądze
                let current = pieniadze.split(msg.author.id + ";")[1].split("-")[0]
                let nowailosc = parseInt(current) + moni // 2 to liczba NLN dodawanych za każdym wpisem
                zabijsie.editTableZSDB("./pieniadze.txt", msg.author.id + ";" + nowailosc + "-", msg.author.id + ";" + current + "-") // zmiana ilości
            } else {
                // użytkownik nie ma jeszcze nic
                zabijsie.addToTableZSDB("./pieniadze.txt", "\n" + msg.author.id + ";" + moni + "-" + msg.author.tag)
            }
            msg.channel.send("Zarobiłeś " + moni + "NLN!")
        }
        let czas = zabijsie.readTableZSDB("./workwork.txt")
        var day = dateObj.getDay();
        var d = Math.random();
        let join = args.join(" ");
        if (czas.includes(msg.author.id)) {
            let twoje = parseInt(czas.split(msg.author.id + ";")[1].split("-")[0]);
            console.log(twoje)
            console.log(day)
            if (twoje == day) {
                msg.channel.send("a co kradnie pan pieniążki, pewnie na passata (ERROR: Pracować możesz dopiero jutro!)")
            } else {
                let nowailosc = day
                zabijsie.editTableZSDB("./workwork.txt", msg.author.id + ";" + nowailosc + "-", msg.author.id + ";" + current + "-")
            }
        } else {
            // użytkownik nie ma jeszcze nic
            zabijsie.addToTableZSDB("./workwork.txt", "\n" + msg.author.id + ";" + day + "-" + msg.author.tag)
            if (join == 99) {
                console.log("pracasecret")
                if (d < 0.05) {
                    msg.channel.send("ma pan to prace")
                    addmoni(7500);
                }
            }
            if (join == 1) {
                console.log("praca1")
                if (d < 0.05) {
                    msg.channel.send("ma pan to prace")
                    addmoni(2000);
                }
            }
            else if (join == 2) {
                console.log("praca2")
                if (d < 0.08) {
                    msg.channel.send("ma pan to prace")
                    addmoni(1800);
                }
            }
            else if (join == 3) {
                console.log("praca3")
                if (d < 0.1) {
                    msg.channel.send("ma pan to prace")
                    addmoni(1500);
                }
            }
            else if (join == 4) {
                console.log("praca4")
                if (d < 0.15) {
                    msg.channel.send("ma pan to prace")
                    addmoni(1000);
                }
            }
            else if (join == 5) {
                console.log("praca5")
                if (d < 0.25) {
                    msg.channel.send("ma pan to prace")
                    addmoni(900);
                }
            }
            else if (join == 6) {
                console.log("praca6")
                if (d < 0.3) {
                    msg.channel.send("ma pan to prace")
                    addmoni(750);
                }
            }
            else if (join == 7) {
                console.log("praca7")
                if (d < 0.4) {
                    msg.channel.send("ma pan to prace")
                    addmoni(600);
                }
            }
            else if (join == 8) {
                console.log("praca8")
                if (d < 0.6) {
                    msg.channel.send("ma pan to prace")
                    addmoni(500);
                }
            }
            else if (join == 9) {
                console.log("praca9")
                if (d < 0.8) {
                    msg.channel.send("ma pan to prace")
                    addmoni(200);
                }
            }
            else {
                msg.channel.send("Dostępna prace:`\n1. Wydobywca oleju - 2000 NLN - 5% szansy\n2. Deweloper - 1800 NLN - 8% szansy\n3. Doktor - 1500 NLN - 10% szansy\n4. Statstyk - 1000 NLN - 15% szansy\n5. Księgowy - 900 NLN - 25% szansy\n6. Mechanik samochodowy - 750 NLN - 30% szansy\n7. Strażak - 600 NLN - 40% szansy\n8. Nauczyciel - 500 NLN - 60% szansy\n9. Sprzątacz - 200 NLN - 80% szansy`")
            }
        }
        /*console.log(day)
        if (czas.includes(msg.author.id)) {
            let twoje = parseInt(czas.split(msg.author.id + ";")[1].split("-")[0]);
            console.log(twoje)
            console.log(day)
            if (twoje == day) {
                msg.channel.send("a co kradnie pan pieniążki, pewnie na passata (ERROR: Pieniądze możesz odebrać dopiero jutro!)")
            }
            else {
                // użytkownik ma już jakieś pieniądze
                let current = czas.split(msg.author.id + ";")[1].split("-")[0]
                let nowailosc = day // 2 to liczba NLN dodawanych za każdym wpisem
                zabijsie.editTableZSDB("./daily.txt", msg.author.id + ";" + nowailosc + "-", msg.author.id + ";" + current + "-") // zmiana ilości
                if (pieniadze.includes(msg.author.id)) {
                    // użytkownik ma już jakieś pieniądze
                    let current = pieniadze.split(msg.author.id + ";")[1].split("-")[0]
                    let nowailosc = parseInt(current) + 150 // 2 to liczba NLN dodawanych za każdym wpisem
                    zabijsie.editTableZSDB("./pieniadze.txt", msg.author.id + ";" + nowailosc + "-", msg.author.id + ";" + current + "-") // zmiana ilości
                    let embed = new Discord.RichEmbed()
                        .setColor(0x198c41)
                        .setTitle(`D A I L Y`)
                        .setDescription("Dostał pan 150NLN");
                    msg.channel.send(embed);
                } else {
                    // użytkownik nie ma jeszcze nic
                    zabijsie.addToTableZSDB("./pieniadze.txt", "\n" + msg.author.id + ";150-" + msg.author.tag)
                }
            }

        } else {
            // użytkownik nie ma jeszcze nic
            zabijsie.addToTableZSDB("./daily.txt", "\n" + msg.author.id + ";" + day + "-" + msg.author.tag)
        }*/
    }
}
module.exports = workwork;
