const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {

    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Вы не упомянули пользователя!");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

    let hugEmbed = new Discord.RichEmbed()
    .setTitle("Hug! c:")
    .setDescription(`**${message.author.username}** Hugged | Обнял **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("версия бота 0.0.1 BETA", bot.user.displayAvatarURL);

    message.channel.send(hugEmbed)

}
module.exports.help = {
    name: "hug"
}
