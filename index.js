const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Token here';

const PREFIX = 's!';


bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('(s!help) Status here.', { type: 'LISTENING'})
    .then(Presence => console.log(`Activity set to ${Presence.activities[0].name}`))
    .catch(console.error);
});

//Msg.reply pings the user and msg.send.channel doesn't

bot.on('message', msg=>{
    if(msg.content ===  "s!help"){
        msg.channel.send('Hello there! This bot is currently being coded by Zaddity#0666, please stay patient as there are very limited commands.')
    }

})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!');
             break;
        case 'website':
             message.channel.send('Website here')
             break;
         case 'info':
             if(args[1] === 'version'){
                 message.channel.send('Version 1.0.1');
             }else{
                 message.channel.send('Invalid Args')
             }
         break;


    }
})

bot.login(token);
