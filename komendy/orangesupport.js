const Discord = require("discord.js")
class orangesupport {
  constructor(){
    this.name = "pomoc orange",
    this.alias = ["pomoc-orange"]
  }
  async run (client, msg, args) {
    let odpowiedzi = ["Nie chce nam się wysyłać twojej wiadomości", "Nie lubimy cię i być może twoja karta SIM też.", "Nadajnik radiowy nam wybuchł", "Korzystałeś kiedyś z Plusa", "Liseu znowu zrobił object object", "ProgramistaZpolski znowu robi bezsensowne komendy", "TheTroll zjadł koła", "Nie masz na koncie żadnych niemieckich złotych", "ZabijSięDB się wywaliło", "Nie zapłaciliśmy naszym pracownikom", "Wagon pocztowy się wykoleił", "Orange został planetą :ringed_planet:", "Orange został rakietą :rocket:", "Przepraszamy support jest zamknięty", "Czy chcesz zakupić telefon za jedyne 1 Niemieckich Złotych?", "You are trying to view flash content but you have no Flash Plugin Installed"];
    let i = Math.floor(Math.random() * odpowiedzi.length);
    let join = args.join(" ");
    let embed = new Discord.MessageEmbed()
      .setColor(0x198c41)
      .setTitle(`Pomoc Orange`)
      .setAuthor("Orange", "https://logoeps.com/wp-content/uploads/2011/06/orange-logo-vector.png")
      .setDescription("Nasz support znalazł powód dla którego masz problemy z wiadomościami: **\n" + odpowiedzi[i] + "**");
    msg.channel.send(embed);
  }
}
module.exports = orangesupport;
