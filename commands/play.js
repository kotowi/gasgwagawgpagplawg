const Discord = require('discord.js');
const YTDL = require("ytdl-core");
const bot = new Discord.bot();
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyD2XEzuiuXeNaf4gHb2b6DYIhsxk3WuHRM');
});

function play(connection, message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {
        filter: "audioonly"
    }));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });

}
var servers = {};
module.exports.run = (bot, message, args) => {
  const voiceChannel = msg.member.voiceChannel;
  		if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
  		const permissions = voiceChannel.permissionsFor(msg.bot.user);
  		if (!permissions.has('CONNECT')) {
  			return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
  		}
  		if (!permissions.has('SPEAK')) {
  			return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
  		}

  		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
  			const playlist = youtube.getPlaylist(url);
  			const videos = playlist.getVideos();
  			for (const video of Object.values(videos)) {
  				const video2 =  youtube.getVideoByID(video.id); // eslint-disable-line no--in-loop
  				 handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no--in-loop
  			}
  			return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
  		} else {
  			try {
  				var video =  youtube.getVideo(url);
  			} catch (error) {
  				try {
  					var videos =  youtube.searchVideos(searchString, 10);
  					let index = 0;
  					msg.channel.send(`
  __**Song selection:**__
  ${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
  Please provide a value to select one of the search results ranging from 1-10.
  					`);
  					// eslint-disable-next-line max-depth
  					try {
  						var response =  msg.channel.Messages(msg2 => msg2.content > 0 && msg2.content < 11, {
  							maxMatches: 1,
  							time: 10000,
  							errors: ['time']
  						});
  					} catch (err) {
  						console.error(err);
  						return msg.channel.send('No or invalid value entered, cancelling video selection.');
  					}
  					const videoIndex = parseInt(response.first().content);
  					var video =  youtube.getVideoByID(videos[videoIndex - 1].id);
  				} catch (err) {
  					console.error(err);
  					return msg.channel.send('🆘 I could not obtain any search results.');
  				}
  			}
  			return handleVideo(video, msg, voiceChannel);
      }}
module.exports.help = {
    name: "play"
 };
