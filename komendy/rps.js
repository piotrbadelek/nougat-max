const Discord = require("discord.js");
const zabijsie = require("../zabij-sie-db.js");
const pieniazki = "./pieniadze.txt";
//dlaczego jeszcze raz robi to pan
// bo to co zrobiles to aksztanstwo XD
// no znaczy działa, jest ok. ale ja zrobie to lepiej XD   ok ja moge zrobic zabijsie
async function promptMessage(msg, author, time, vR) {
    time *= 1000
    for (const reaction of vR) await msg.react(reaction);
    const filter = (reaction, user) => vR.includes(reaction.emoji.name) && user.id === author.id;
    return msg.awaitReactions(filter, { max:1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
}
class rps {
    constructor(){
        this.name = "rps"
        this.alias = ["rockpaperscissors"]
    }
    async run (client, msg, args) {
        const chooseArr = ["🗻", "📰", "✂"];
        const embed = new Discord.RichEmbed()
        .setColor(0x198c41)
        .setAuthor(msg.author.username + "#" + msg.author.discriminator, msg.author.displayAvatarURL)
        .setDescription("Aby zagrać zareaguj dowolną emotką z poniższych! 😀")
        .setTimestamp();

        const ms = await msg.channel.send(embed);
        const reacted = await promptMessage(ms, msg.author, 30, chooseArr);

        const komputer = chooseArr[Math.floor(Math.random() * chooseArr.length)];
        const result = await getResult(reacted, komputer);
        await ms.clearReactions();

        embed.addField(result, `${reacted} vs ${komputer}`);
        embed.setDescription(` `);
        ms.edit(embed);

        function getResult(user, bot) {
            if((user === "🗻" && bot === "✂") ||
            (user === "📰" && bot === "🗻") ||
            (user === "✂" && bot === "📰")) {
                hajs();
                return "Wygrałeś! 🥇";
            } else if(user === bot) {
                return "Remis! 🙏";
            } else {
                return "Przegrałeś! 😨";
            }
        }
        function hajs() { 
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
        }
        function hajsMINUS() { //to jest DODAWANIE pieniędzy // no to po ciul to wstawiasz w else
            let cashcashminus = Math.floor((Math.random() * 20) + 10);
            let pieniadze = zabijsie.readTableZSDB("./pieniadze.txt")
            if (pieniadze.includes(msg.author.id)) {
                // użytkownik ma już jakieś pieniądze
                let current = pieniadze.split(msg.author.id + ";")[1].split("-")[0]
                let nowailosc = parseInt(current) -  cashcashminus// 2 to liczba NLN dodawanych za każdym wpisem
                zabijsie.editTableZSDB("./pieniadze.txt", msg.author.id + ";" + nowailosc + "-", msg.author.id + ";" + current + "-") // zmiana ilości
            } else {
                // użytkownik nie ma jeszcze nic
                zabijsie.addToTableZSDB("./pieniadze.txt", "\n" + msg.author.id + ";15-" + msg.author.tag)
            }
        }
    }
}

module.exports = rps;