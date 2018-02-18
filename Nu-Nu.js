const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Guess it ran succesfully');
});

client.on('message', m => {
  if (m.channel.id === '414564289253212162') {
    setTimeout(() => {m.delete()}, 60000);
  }
});

client.login(process.env.BOT_TOKEN);
