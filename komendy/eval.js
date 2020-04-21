const Discord = require("discord.js")
const readline = require('readline');
function askQuestion(params) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(resolve => rl.question(params, ans => {
        rl.close();
        resolve(ans);
    }))
}
function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
class evall {
    constructor() {
        this.name = "eval",
            this.alias = ["jakiskodsobiezrobegzekucjeimeansobieuruchom"]  //musi cos byc inaczej sie nie uruchamia bot
    } // to robimy to bocisk o                   tak jaki plik utworzyc                wypierdzielzadrzwi .js? nie .konegunda
    async run(client, msg, args) {
        msg.channel.send("Aby wykonywać niebezpieczny kod wymagana jest weryfikacja kodem z konsoli");
        let blokada = randomString(16, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
        console.log(blokada);
        const ans = await askQuestion("Podaj kod z konsoli:");
        if (ans == blokada) {
            let komenda = msg.content.split(" ")
            let b = komenda.shift()
            komenda = komenda.join(" ")
            if (komenda == "process.exit(1)") {
                console.log("hehe nie");
            }
            else {
                let id = ["284980083104415746", "347736225873920021", "300346870574612491"]
                if (id.includes(msg.author.id)) {
                    // jeden z dozwolonych w id
                    try {
                        let a = eval(komenda)
                        msg.channel.send("Wynik:\n```" + a + "```")
                    }
                    catch (error) {
                        msg.channel.send("Błąd!\n```" + error + "```")
                    }
                }
            }
        }
        else {
            msg.channel.send("Nie udało się zweryfikować autentyczności kodu");
        }
    }
}
module.exports = evall;
