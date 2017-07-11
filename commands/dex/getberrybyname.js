const commando = require('discord.js-commando');
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();


class getberrybynamecommand extends commando.Command{
    constructor(client){
        super(client, {
            name: 'getberrybyname',
            group: 'dex',
            memberName: 'getberrybyname',
            description: 'Gives all details on a berry'
        });
    }

    async run(message, args) {
       P.getBerryByName('cheri')
            .then(function(response) {
                console.log(JSON.stringify(response, null, 2));//JSON.stringify(object, null, 2)
                message.reply(JSON.stringify(response, null, 2));
            }) //maybe needs to parse to JSON
            .catch(function(error) {
                console.log('There was an ERROR: ', error);
            });
    }
}
module.exports = getberrybynamecommand;