const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  const embed = new Discord.RichEmbed()
  .setTitle("Доступные команды :")
  .addField("help", "Помощь по коммандам.")
  .addField("hug", "Обнимите пользователя.")
  .addField("smoke", "Заставьте бота покурить.")
  .addField("memeban", "Пошутите про бан. (Команда не банит игроков)")
  .addField("kiss", "Поцелуйте пользователя.")
  .addField("bat", "Погладить пользователя.")
  .setDescription("Префикс бота : V")
  .setColor("#4b14ff");
  message.channel.send(embed)

}
  module.exports.help = {
      name: "help",
  }
