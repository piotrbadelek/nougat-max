const Discord = require("discord.js");
const zabijsie = require("../zabij-sie-db.js");
let plik = "./biedronka.txt"
function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
class sprzedaj {
    constructor(){
        this.name = "sprzedaj",
        this.alias = []
    }
    async run (client, msg, args) {
        let podalnazwe = false;
        let productName = ""
        let productCena = ""
        let productCos = ""
        let podalcene = false;
        let podaltekstlubcos = false;
        let collector;
        msg.author.send("Co chcesz sprzedać? :thinking:") 
        console.log(msg.author.id)
        client.users.cache.get(msg.author.id).createDM().then(kanal => {
            let etap = 0
            collector = kanal.createMessageCollector(m => m); 
            collector.on("collect", m => { 
                if (m.author.id == client.user.id) {} else {
                    etap += 1
                    if (m.content === "anuluj") { 
                        collector.stop();
                        msg.author.send("Anuluję!")
                    }
                    if(etap == 1) {
                        productName = m.content;
                        podalnazwe = true;
                        msg.author.send("Ile to ma kosztować? :thinking: (tylko weś nie przesadzaj XD)")
                    }
                    if (etap == 2) {
                        productCena = m.content.replace(/[^0-9]/g,"");
                        podalcene = true;
                        msg.author.send("Dobra! A teraz co dokładnie chcesz sprzedać? Może to być tekst lub link (może prowadzić do obrazka)")
                    }
                    if (etap == 3) {
                        productCos = m.content;
                        podaltekstlubcos = true;
                        let embed = new Discord.MessageEmbed()
                        .setColor((Math.random() * 0xFFFFFF << 0).toString(16))
                        .setAuthor(client.user.username + "#" + client.user.discriminator, client.user.displayAvatarURL)
                        .setTitle("Wszystko się zgadza?")
                        .addField("Nazwa produktu", productName)
                        .addField("Cena produktu", productCena)
                        .addField("Itemek", productCos)
                        .setFooter("Potwierdź wpisując ✅ tak/⛔ nie.");
                        msg.author.send(embed);
                    }
                    if(m.content === "nie") {
                        collector.stop();
                        msg.author.send("Anuluję!");
                    }
                    if(m.content == "tak" && etap == 4) {
                        if(podaltekstlubcos == true) {
                            let idProdukt = randomString(5, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
                            msg.author.send(`Wystawiasz produkt "${productName}" na sprzedaż!`)
                            let staralista = zabijsie.readTableZSDB(plik)
                            zabijsie.rewriteTableZSDB(plik, productName + "|" + idProdukt + "|" + productCena + "|" + productCos + "|\n" + staralista)
                        }
                        
                    }
                }
                
            }); 
        })
        
    }
}
module.exports = sprzedaj;