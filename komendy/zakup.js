const Discord = require("discord.js")
const zabijsie = require("../zabij-sie-db.js")
let waluta = "NLN"
class zakup {
  constructor(){
    this.name = "kup",
    this.alias = ["zakup"]
  } // pypl yzj // zajmuje embedy  ok
  async run (client, msg, args) { // ok
    let iddokupienia = msg.content.split(" ")[1]; // wait, ta nowa funkcje zabijsiedb zwraca linijkę na której jest tekst?
    let biedronka = zabijsie.readTableZSDB("./biedronka.txt"); //tak
    let cash_money = zabijsie.readTableZSDB("./pieniadze.txt"); 
    if(cash_money.includes(msg.author.id)) { //chwila reset jest sesji
      // kupujący jest zapisany do bazy
      let pieniadze = parseInt(cash_money.split(msg.author.id)[1].split("-")[0]);
      let a = biedronka.split(iddokupienia)[0].split("|")
      let dozaplaty = parseInt(a[a.length - 1]);
      if((pieniadze - dozaplaty) < 0) {
        msg.channel.send("Nie masz wystarczająco pieniędzy! Potrzebujesz " + dozaplaty + " " + waluta + ", a posiadasz tylko " + pieniadze + " " + waluta + ".")

      } else {
        pieniadze = pieniadze - dozaplaty;// przyda się, jednak to nie wszystko "przyda się?", "zabijsię".editTableZSDB      zabij sie, a potem edytuj tabele
        // edytuj stół* xD XDDD
        zabijsie.editTableZSDB("./biedronka.txt", msg.author.id + ";" + (pieniadze - dozaplaty), msg.author.id + ";" + pieniadze)
        //zabijsie.editTableZSDB("./pieniadze.txt", "\n" + msg.author.id + ";2-" + msg.author.tag);
        msg.channel.send("Zakupiłeś produkt! Wysyłam Ci go na DM!") // ktoś dodał r do bot.js takie samotne r ;c ; halohalohalohaloD
        let produkt = biedronka.split(iddokupienia)[1].split("|")
        msg.author.send("Zakupiłeś produkt z Biedronki! Oto on:\n" + produkt[1].split("\n")[0])
      }
      // próbujemy? tak ale zeby to nie byla biedronkaTM
    }
  }
}
module.exports = zakup;