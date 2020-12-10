const Discord = require("discord.js")
const say = require("say");
class tts {
  constructor(){
    this.name = "tts",
    this.alias = ["powiedznaglos"]
  }
  async run (client, msg, args) {
    function tts(voiceChannel, text) {
        say.speak(text, null, 1, (err) => {
            if (err) {
                console.error(err);
                return;
            }else{
                msg.member.voiceChannel.leave();
            }
        });
    }
    let join = args.join(" ");
      if (!msg.member.voiceChannel) return msg.channel.send("Nie znajdujesz się na żadnym kanale głosowym!");
      const connection = await msg.member.voiceChannel.join();
        tts(connection, join)
    console.log("tts");
  }
}
module.exports = tts;
