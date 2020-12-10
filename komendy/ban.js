const Discord = require("discord.js")
class ban {
    constructor() {
        this.name = "ban",
            this.alias = ["ban", "BanusMaximus"]
    }
    async run(client, msg, args) {
        const user = msg.mentions.users.first(); // returns the user object if an user mention exists
        const reason = args.slice(1).join(' '); // Reason of the ban (Everything behind the mention)

        if (!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("A chce pan gazem pieprzowym?");

        // Check if an user mention exists in this msg
        if (!user) {
            try {
                // Check if a valid userID has been entered instead of a Discord user mention
                if (!msg.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Houston, mamy problem');
                // If the client (bot) can get a user with this userID, it overwrites the current user variable to the user object that the client fetched
                user = msg.guild.members.get(args.slice(0, 1).join(' '));
                user = user.user;
            } catch (error) {
                return msg.reply('Houston, mamy problem');
            }
        }
        if (user === msg.author) return msg.channel.send('A po co pan chce siebie banowac'); // Check if the user mention or the entered userID is the msg author himsmelf
        if (!reason) return msg.reply('Proszę pana a jaki powód do tego (ERROR: Nie podano powodu)'); // Check if a reason has been given by the msg author
        if (!msg.guild.member(user).bannable) return msg.reply('A co chce pan zbanować? Właściciela? (ERROR: Użytkownik ma wyszszą rangę niż ty)');
        console.log(msg.author);
        if (args)
            await msg.guild.members.ban(user) // Bans the user

        const banConfirmationEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            .setDescription(`✅ ${user.tag} został zbanowany`);
        msg.channel.send({
            embed: banConfirmationEmbed
        }); // Sends a confirmation embed that the user has been successfully banned


        const modlogChannelID = ''; // Discord channel ID where you want to have logged the details about the ban
        if (modlogChannelID.length !== 0) {
            if (!client.channels.get(modlogChannelID)) return undefined; // Check if the modlogChannelID is a real Discord server channel that really exists

            const banConfirmationEmbedModlog = new Discord.MessageEmbed()
                .setAuthor(`Zbanowany przez **${msg.author.username}#${msg.author.discriminator}**`, msg.author.displayAvatarURL)
                .setThumbnail(user.displayAvatarURL)
                .setColor('RED')
                .setTimestamp()
                .setDescription(`**Akcja**: Ban
**Użytkownik**: ${user.username}#${user.discriminator} (${user.id})
**Powód**: ${reason}`);
            client.channels.get(modlogChannelID).send({
                embed: banConfirmationEmbedModlog
            }); // Sends the MessageEmbed in the modlogchannel
        }
    }
} // co bo nie widzialem co ty zrobiles ze sie bot odpalic nie chce
module.exports = ban;
