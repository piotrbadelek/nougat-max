const Discord = require("discord.js")
class ball {
  constructor(){
    this.name = "8ball",
    this.alias = ["ball", "8pilka"]
  }
  async run (client, msg, args) {
    let odpowiedzi = ['Raczej nie!', 'Oczywiście!', 'Ty no nie wiem', 'eee papryka', 'Xiaomi lepsze', 'Jak najbardziej', 'Hehe nie', 'Uno Reverse Card', 'ZabijSięDB jest zajebiste', "ZABIĆ MONGODB", "Uno reverse card: Tak", "Uno reverse card: Nie"];
    let i = Math.floor(Math.random() * 8);
    let join = args.join(" ");
    if(join.includes("zabijsiędb")) i = 8;
    if(join.includes("maks")) i = 1;
    if(join.includes("pieseł")) i = 1;
    if(join.includes("kukanq")) i = 1;
    if(join.includes("h jest dobre")) i = 1;
    if(join.includes("mongodb") || join.includes("mangodb")) i = 9;
    let embed = new Discord.MessageEmbed()
      .setColor(0x198c41)
      .setTitle(`:8ball: ${args.join(" ")}`)
      .setDescription(odpowiedzi[i]);
    msg.channel.send(embed);
    console.log("8ball");
  }
}
module.exports = ball;
