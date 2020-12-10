const Discord = require("discord.js")
const request = require('request')
class kanalyt {
  constructor(){
    this.name = "kanaly",
    this.alias = ["yt", "kanal"]
  }
  async run (client, msg, args) {
    function genEmbed(info) {
        let embed = new Discord.MessageEmbed()
        .setColor("#4287f5")
        .setDescription("Informacje o kanale:")
        .addField("Nazwa:", info.title)
        .addField("Opis:", '```' + info.description.split("discord.gg").join("haha yes ").split("https://").join("nein ").split("http://").join("nein ").split("www.").join("nein ") + "```")
        .addField("Nazwa:", info.title)
        .addField("Utworzono:", info.publishedAt.split("T")[0])
        .setThumbnail(info.thumbnails.high.url)
        .addField("Kraj:", info.country) // ok  zrobie potem konwenterowanie info.country na pełne nazwy (zamiast pl polska)
        .setAuthor(msg.author.username, msg.author.displayAvatarURL)
        .setTimestamp();
        msg.channel.send(embed);
    }
    let key = "AIzaSyCHyLo8HeGhta96POjC-avjVC38-5FDMSs"
    // później dorobi się embedy
    let id = args[0] // jeszcze zrobię żeby po nazwie dało się szukać
    request({ // ok :thumbsup:
        method: 'get',
        url: 'https://www.googleapis.com/youtube/v3/channels?part=snippet&key=' + key + "&id=" + id + '&type=video&maxResults=1'
    }, (error, response, body) => {
        let res = JSON.parse(response.body)
        let info;
        try {
            info = res.items[0].snippet
            if(info) {
                genEmbed(info)
            }
        }
        catch(error) {
            // nie mogło znaleźć kanału
            id = args[0]
            console.log("szukam: " + id)
            console.log('https://www.googleapis.com/youtube/v3/search?part=snippet&key='+key+'&q=' + id + '&type=channel&maxResults=1')
            request({
                method: 'get',
                url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&key='+key+'&q=' + id + '&type=channel&maxResults=1'
            }, (err, resp) => {
                let inf = JSON.parse(response.body)
                console.log(inf)
            })
        }
         // już skończyłeś embedy czy jeszcze nie?
        //msg.channel.send("Informacje o kanale:\nNazwa: " + info.title + "\nOpis:```" + info.description.split("discord.gg").join("haha yes").split("https://").join("nein").split("http://").join("nein").split("www.").join("nein") + "```\nUtworzono: "  + info.publishedAt.split("T")[0] + "\nAwatar:" + info.thumbnails.high.url + "\nKraj: " + info.country + "" /* żeby linki ukrywać*/)
    })
    
  } // pamiętaj żeby tego embeda potem dać przed }) w requeście  ok  na razie tylko pisze jeszcze tego embeda   mam pomysł jeszcze jeden ale później
}
module.exports = kanalyt;
