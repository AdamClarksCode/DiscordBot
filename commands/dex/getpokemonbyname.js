const commando = require('discord.js-commando');
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
//https://github.com/PokeAPI/pokedex-promise-v2

class getpokemonbynamecommand extends commando.Command{
    constructor(client){
        super(client, {
            name: 'getpokemonbyname',
            group: 'dex',
            memberName: 'getpokemonbyname',
            description: 'Gives all details on a desired Pokemon, searched for by its name'
        });
    }

    async run(message, args) {
        P.getPokemonByName("pikachu")
            .then(function(response) {
                var thePokemon = JSON.stringify(response, null, 2)
                thePokemon = thePokemon.substring(0, 998)
                console.log(thePokemon);
                message.reply(thePokemon);
            })
            .catch(function(error) {
                console.log('There was an ERROR: ', error);
            }); 
    }
}
module.exports = getpokemonbynamecommand;