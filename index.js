const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('dex', 'Dex');
bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.on("message", async message => {
    if(message.author == bot.user) return;
    var input = message.toString();
    input = input.toLowerCase();
    if(input.indexOf("gitgud") != -1 || input.indexOf("git gud") != -1 || input.indexOf("dark souls") != -1) message.reply("https://media.tenor.com/images/628f092d12cce4af0e12ff4e94137730/tenor.gif");
    if(input.indexOf("mlg") != -1)  message.reply("http://i1.kym-cdn.com/photos/images/newsfeed/000/793/372/fe7.gif");
});
bot.login('MzMzOTc1Mjk1MTM0NzkzNzI4.DEUl1g.VtpsiFsO1eyPP1fYHxlU5JnkeRs');
