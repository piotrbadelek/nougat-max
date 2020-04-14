const Discord = require("discord.js")
const zabijsie = require("../zabij-sie-db.js")
let pieniadzee = "./pieniadze.txt"
let waluta = "NLN"
class zaplac {
  constructor(){
    this.name = "zaplac",
    this.alias =["pay",`whatyourelookingatrightnowisthelineontheopeningdayofthesecondMcDonaldsrestaurantsintheSovietUnionthelinecrossedaroundseveralcityblockscreatingafewtrafficjamsandlastinofleastagood10hoursonJanuary31st199430000peoplevisitedthefirstfastfoodchaininMoscowhope`]
  }
  async run (client, msg, args) {
    let pieniadze = zabijsie.readTableZSDB(pieniadzee)
    let nazwaosoby = ""
    let osoba = msg.content.split(" ")[1].replace(/[^0-9]/g,"")
    let dozaplaty = parseInt(msg.content.split(" ")[2].replace(/[^0-9]/g,""))
    let ok = true
    if(osoba == "" || dozaplaty == "" || dozaplaty == 0 || dozaplaty == NaN) {
        msg.channel.send("Poprawne użycie komendy:\n```\n*zaplac @mention-osoby doZaplaty```")
    } else {
        if(osoba == msg.author.id) {
            msg.channel.send("Nie możesz zapłacić samemu sobie!")
            ok = false
        }
        if(dozaplaty <= 0) {
            msg.channel.send("Musisz zapłacić co najmniej 1 " + waluta + ".")
            ok = false
        }
        try {
            nazwaosoby = client.users.get(osoba).username
            if(pieniadze.includes(osoba) == false) {
                zabijsie.addToTableZSDB(pieniadzee, "\n" + osoba + ";0-" + nazwa)
            }
        }
        catch(error) {
            ok = false
            msg.channel.send("Nie można znaleźć takiej osoby!")
        }
        pieniadze = zabijsie.readTableZSDB(pieniadzee)
        if(ok == true) {
            if(pieniadze.includes(msg.author.id) && pieniadze.includes(osoba)) {
                let twoje = parseInt(pieniadze.split(msg.author.id + ";")[1].split("-")[0]);
                let jego = parseInt(pieniadze.split(osoba + ";")[1].split("-")[0]);
                console.log("pieniądze " + msg.author.username + ": " + twoje + "\npieniądze " + nazwaosoby + ": " + jego)
                if((twoje - dozaplaty) < -1) {
                    msg.channel.send("Nie masz wystarczająco pieniędzy! (teraz masz: " + twoje + ")")
                } else {
                    zabijsie.editTableZSDB(pieniadzee, msg.author.id + ";" + (parseInt(twoje) - dozaplaty).toString(), msg.author.id + ";" + twoje)
                    zabijsie.editTableZSDB(pieniadzee, osoba + ";" + (parseInt(jego) + dozaplaty).toString(), osoba + ";" + jego)
                    setTimeout(function() {
                        pieniadze = zabijsie.readTableZSDB(pieniadzee)
                        twoje = parseInt(pieniadze.split(msg.author.id + ";")[1].split("-")[0]);
                        jego = parseInt(pieniadze.split(osoba + ";")[1].split("-")[0]);
                        msg.channel.send("Użytkownik " + nazwaosoby + " ma teraz " + jego + " " + waluta + ",\na " + msg.author.username + " " + twoje + " " + waluta + ".")
                    }, 750)
                }
            }
        }
    }
  }
}
module.exports = zaplac;
