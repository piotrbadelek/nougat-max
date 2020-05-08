const Discord = require("discord.js")
class help {
  constructor(){
    this.name = "pomoc",
    this.alias = ["pomoc", "help"]
  }
  async run (client, msg, args) {
    // embedy
    let embed = new Discord.RichEmbed()

    if(!args[0]) {
      embed.setColor(0x198c41)
      embed.setTitle(`Pomoc 📚`)
      embed.setDescription("Problemy z botem? Sprawdź status bota: [Link do Freshstatus](https://nougat.freshstatus.io)\nDołącz do naszego [discorda](https://discord.gg/HP3ZADA)\n\nKomenda \\***pomoc** jest podzielona na kategorię.\nAby zobaczyć wszystkie komendy i ich opisy należy wpisać \\*help <kategoria>\nDostępne kategorie: Rozrywka, Moderacja, Ekonomia, Bot, Muzyka\n\n:link: [Panel Bota](http://83.7.49.211/)")
      embed.setFooter("Pomoc")
      embed.setTimestamp();
    } else if (args[0].toString().toLowerCase() == "ekonomia") {
      embed.setColor(0x198c41)
      embed.setTitle("Pomoc 📚")
      embed.setDescription("Pomoc/💰Ekonomia\n\n\`*biedronka\` - Wyświetla listę produktów znajdujących się w niej.\n\n\`*daily\` - Codziennne pieniądze.\n\n\`*kup\` - Kupowanie produktu z biedronki.\nPoprawne użycie: \`*kup <id produktu>\`\n\n\`*money\` - Sprawdza stan konta danego użytkownika\nPoprawne użycie: \`*money <@użytkownik#0000>\`\n\n\`*pay\` - Płacenie innemu użytkownikowi.\nPoprawne użycie: \`*pay <@uzytkownik#0000> <liczba pieniędzy>\`\n\n\`*sprzedaj\` - Komenda dzięki której możesz sprzedać własny produkt w biedronce.\n\n\`*top\` - Ranking 10 użytkowników posiadających najwięcej pieniędzy.")
      embed.setFooter("Pomoc")
      embed.setTimestamp();
    } else if (args[0].toString().toLowerCase() == "rozrywka") {
      embed.setColor(0x198c41)
      embed.setTitle("Pomoc 📚")
      embed.setDescription("Pomoc/☺Rozrywka\n\n\`*8ball\` - Losowo odpowiada na pytanie.\nPoprawne użycie: \`*8ball <pytanie>\`\n\n`*ciastko\` - Daje ci ciastko.\n\n\`*cowsay\` - Krowa coś mówi.\nPoprawne użycie: \`*cowsay <tekst>\`\n\n\`*odwroc\` - Odwraca tekst\nPoprawne użycie: \`*odwroc <tekst>\`\n\n\`*pozwij\` - Pozywa użytkownika do sadu.\n\n\`*rps\` - Kamień Papier Nożyce.\nPoprawne użycie: \`*rps <1 - Nożyce, 2 - Papier, 3 - Kamień>\`\n\n`*say\` - Bot mówi coś za ciebie\nPoprawne użycie: \`*say <tekst do powiedzenia>\`\n\n`*sms\` - Wysyła SMS do danej osoby.\n\n\`*statki\` - Shipowanie.\nPoprawne użycie: \`*statki <tekst> <tekst>\`\n\n\`*wybierz\` - Wybiera jedną z dwóch rzeczy\nPoprawnie użycie: \`*wybierz <tekst> <tekst>\`\n\n\`*wyscig\` - Mini gra w której ścigają się pociągi.\n\n\`*zjedz\` - Działa na takiej samej zasadzie co komenda pozwij lecz zamiast pozywania jest jedzenie.")
      embed.setFooter("Pomoc")
      embed.setTimestamp();
    } else if (args[0].toString().toLowerCase() == "moderacja") {
      embed.setColor(0x198c41)
      embed.setTitle("Pomoc 📚") 
      embed.setDescription("Pomoc/🔩Moderacja\n\n\`*ban\` - Blokuje daną osobę na serwerze.\nPoprawne użycie:\`*ban <@uzytkownik#0000> <powod>\`\n\n\`*kick\` - Wyrzuca daną osobę z serwera.\nPoprawne użycie: \`*kick <@uzytkownik#0000> <powod>\`\n\n\`*userinfo\` - Wyświetla informację o użytkowniku.\nPoprawne użycie: \`*userinfo <@uzytkownik#0000>\`\n\n\`warn\` - Ostrzega osobę.\nPoprawne użycie: \`*warn <@uzytkownik#0000> <powod>\`\n\n\`*kick\` - Wyrzuca daną osobę z serwera.\nPoprawne użycie: \`*kick <@uzytkownik#0000> <powod>\`\n\n\`*userinfo\` - Wyświetla informację o użytkowniku.\nPoprawne użycie: \`*userinfo <@uzytkownik#0000>\`\n\n\`tempban\` - Wycisza osobę na podany okres czasu.\nPoprawne użycie: \`*tempban <@uzytkownik#0000> <czas> <m lub h (minuty (m) lub godziny (h))>\`")
      embed.setFooter("Pomoc")
      embed.setTimestamp();
    } else if (args[0].toString().toLowerCase() == "bot") {
      embed.setColor(0x198c41)
      embed.setTitle("Pomoc 📚")
      embed.setDescription("Pomoc/👾Bot\n\n\`*autorzy\` - Autorzy bota, oraz kontakt do nich.\n\n\`*invite\` - Wysyła link do zaproszenia bota na swój serwer.\n\n\`*github\` - Link do rezpozytoria Nougata na Githubie.\n\n\`*uptime\` - Uptime bota.");
      embed.setFooter("Pomoc")
      embed.setTimestamp();
    } else if (args[0].toString().toLowerCase() == "muzyka") {
      embed.setColor(0x198c41)
      embed.setTitle("Pomoc 📚")
      embed.setDescription("Pomoc/🎶Muzyka\n\n\`*play\` - Dodaje piosenkę z podanego linku do kolejki.\nPoprawne użycie: \`*play <URL>\`\n\n\`*stop\` - Bot wychodzi z kanału głosowego");
      embed.setFooter("Pomoc")
      embed.setTimestamp();
    } else {
      embed.setColor(0x198c41)
      embed.setTitle("Pomoc 📚")
      embed.setDescription("Taka kategoria nie istnieje!");
      embed.setFooter("Pomoc")
      embed.setTimestamp();
    }

    // wysyłka pocztą polską
    msg.channel.send(embed);
  }
} // co bo nie widzialem
module.exports = help;
