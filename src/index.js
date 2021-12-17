require('dotenv').config();
const {Client,  Intents} = require('discord.js');
const client  = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('messageCreate', message => {
    if  (message.content.includes('elied')){
        message.channel.send("oe pai, quieres un porro?");
        message.channel.send("https://i.imgur.com/wihfjs7.png");
    }
});
client.on('messageCreate', message => {
    if  (message.content == 'Donde esta mi cachorra?' || message.content == "donde esta mi cachorra?"){
        if(message.author.username == 'Guillermo'){
            message.channel.send("aqui estoy papi");
        }else{
            message.channel.send("mi dueño es Guillermo, lo siento")
        }
    }   
});


client.login(process.env.TOKEN);