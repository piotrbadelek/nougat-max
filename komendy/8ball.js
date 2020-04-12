const Discord = require("discord.js")
class ball {
  constructor(){
    this.name = "8ball",
    this.alias = ["ball", "8pilka"]
  }
  async run (client, msg, args) {
    let odpowiedzi = ['Raczej nie!', 'Oczywiście!', 'Ty no nie wiem', 'eee papryka', 'Xiaomi lepsze', 'Jak najbardziej', 'Hehe nie', 'ZabijSięDB jest zajebiste', "ZABIĆ MONGODB"];
    let i = Math.floor(Math.random() * odpowiedzi.length-1);
    let join = args.join(" ");
    if(join.includes("zabijsiędb")) i = 7;
    if(join.includes("mongodb") || join.includes("mangodb")) i = 8;
    let embed = new Discord.RichEmbed()
      .setColor(0x198c41)
      .setTitle(`:8ball: ${args.join(" ")}`)
      .setDescription(odpowiedzi[i]);
    msg.channel.send(embed);
  }
}
module.exports = ball;
