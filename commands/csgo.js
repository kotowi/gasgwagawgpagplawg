const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["http://images.vfl.ru/ii/1541862727/3540fecf/24139903.jpg", "http://images.vfl.ru/ii/1541862804/962938a3/24139923.jpg", "http://images.vfl.ru/ii/1541862873/a0b58aa7/24139953.jpg", "http://images.vfl.ru/ii/1541862903/e9ada845/24139968.jpg"];

    let result = Math.floor((Math.random() * replies.length));

    let pawgembed = new Discord.RichEmbed()
        .setTitle("Держи бан!")
        .setColor("#FF69B4")
        .setFooter(`Бан получил ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(pawgembed);
};

module.exports.help = {
    name: "memeban",
}
