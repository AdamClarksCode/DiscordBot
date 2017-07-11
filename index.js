const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('dex', 'Dex');
bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('MzMzOTc1Mjk1MTM0NzkzNzI4.DEUl1g.VtpsiFsO1eyPP1fYHxlU5JnkeRs');