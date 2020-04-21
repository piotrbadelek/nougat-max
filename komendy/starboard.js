const Discord = require("discord.js")
class starboard {
  constructor(){
    this.name = "starboard";
    this.alias = ["starupdate"];
  }
  async run (client, msg, args) {
    this.client = "client"
    const message = reaction.message;
     // This is the first check where we check to see if the reaction is not the unicode star emote.
    if (reaction.emoji.name !== '⭐') return;
     // Here we check to see if the person who reacted is the person who sent the original message.
    if (message.author.id === user.id) return message.channel.send(`${user}, nie możesz dać sobie upvota`);
    // Here we get the starboard channel from the guilds settings. 
    const { starboardChannel } = "starboard" 
    // Here we will find the channel
    const starChannel = message.guild.channels.find(channel => channel.name == starboardChannel)
    // If there's no starboard channel, we stop the event from running any further, and tell them that they don't have a starboard channel.
    if (!starChannel) return message.channel.send(`\`${starboardChannel}\` postanowił umrzeć`); 
    // Here we fetch 100 messages from the starboard channel.
    const fetch = await starChannel.fetchMessages({ limit: 100 }); 
    // We check the messages within the fetch object to see if the message that was reacted to is already a message in the starboard,
    const stars = fetch.find(m => m.embeds[0].footer.text.startsWith('⭐') && m.embeds[0].footer.text.endsWith(message.id)); 
    // Now we setup an if statement for if the message is found within the starboard.
    if (stars) {
    // Regex to check how many stars the embed has.
    const star = /^\⭐\s([0-9]{1,3})\s\|\s([0-9]{17,20})/.exec(stars.embeds[0].footer.text);
    // A variable that allows us to use the color of the pre-existing embed.
    const foundStar = stars.embeds[0];
    // We use the this.extension function to see if there is anything attached to the message.
    const image = message.attachments.size > 0 ? await this.extension(reaction, message.attachments.array()[0].url) : ''; 
    const embed = new RichEmbed()
    .setColor(foundStar.color)
    .setDescription(foundStar.description)
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setTimestamp()
    .setFooter(`⭐ ${parseInt(star[1])+1} | ${message.id}`)
    .setImage(image);
    // We fetch the ID of the message already on the starboard.
    const starMsg = await starChannel.fetchMessage(stars.id);
    // And now we edit the message with the new embed!
    await starMsg.edit({ embed }); 
}
  }
}
module.exports = starboard;