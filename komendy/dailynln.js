const Discord = require("discord.js")
const zabijsie = require("../zabij-sie-db.js");
var dateObj = new Date();
class dailynln {
    constructor() {
        this.name = "dailynln",
            this.alias = ["daily", "komunizm"]
    }
    async run(client, msg, args) {
        let czas = zabijsie.readTableZSDB("./daily.txt")
        let pieniadze = zabijsie.readTableZSDB("./pieniadze.txt")
        var day = dateObj.getDay();
        console.log(day)
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
                    let embed = new Discord.MessageEmbed()
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
        }
    }
}
module.exports = dailynln;
