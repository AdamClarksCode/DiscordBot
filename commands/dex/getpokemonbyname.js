const commando = require('discord.js-commando');
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
const pokemonGif = require('pokemon-gif');

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
        P.getPokemonByName(args.toLowerCase())
            .then(function(response) {
                var thePokemon = JSON.stringify(response, null, 2);
                var indexOf = thePokemon.indexOf("name");
                var formatting = thePokemon.substring(indexOf+8,indexOf+20);
                indexOf = formatting.indexOf('"');
                var name = formatting.substr(0, indexOf);
                var toOutput = "Name: "+name+",";
                indexOf = thePokemon.indexOf('"id"');
                formatting = thePokemon.substring(indexOf+6, indexOf+10);
                indexOf = formatting.indexOf(",");
                formatting = formatting.substring(0, indexOf);
                toOutput = toOutput + " Pokédex No: " + formatting + ",";
                indexOf = thePokemon.indexOf("types");
                formatting = thePokemon.substring(indexOf) 
                if(formatting.includes('slot": 2'))
                {
                    indexOf = formatting.indexOf('name');
                    var type2 = formatting.substring(indexOf+8, indexOf+17);
                    indexOf = type2.indexOf('"');
                    type2 = type2.substring(0, indexOf);
                    indexOf = formatting.indexOf(type2);
                    var type1 = formatting.substring(indexOf);
                    indexOf = type1.indexOf('name');
                    type1 = type1.substring(indexOf+8, indexOf+17);
                    indexOf = type1.indexOf('"');
                    type1 = type1.substring(0, indexOf)
                    toOutput = toOutput + " Types: " + type1 + "/" + type2 + ",";
                } else {
                    indexOf = formatting.indexOf('name');
                    var type1 = formatting.substring(indexOf+8, indexOf+17);
                    indexOf = type1.indexOf('"');
                    type1 = type1.substring(0, indexOf);
                    indexOf = formatting.indexOf(type1);
                    toOutput = toOutput + " Type: " + type1 + ","
                }
                indexOf = thePokemon.indexOf('height');
                formatting = thePokemon.substring(indexOf+9, indexOf+13);
                indexOf = formatting.indexOf(',');
                formatting = formatting.substring(0, indexOf);
                var height = parseFloat(formatting);
                height = height/10;
                toOutput = toOutput + " Height: " + height + "m,";
                indexOf = thePokemon.indexOf("weight");
                formatting = thePokemon.substring(indexOf+9, indexOf+15)
                indexOf = formatting.indexOf(',');
                formatting = formatting.substring(0, indexOf);
                var  weight = parseFloat(formatting);
                weight = weight/10;
                toOutput = toOutput + " Weight: " + weight + "Kg.";
                indexOf = thePokemon.indexOf("abilities");
                formatting = thePokemon.substring(indexOf, indexOf+999);
                console.log(formatting);
                message.channel.sendFile(pokemonGif(name));
                message.reply(toOutput);
            })
            .catch(function(error) {
                console.log('There was an ERROR: ', error);
                 message.reply('There was an ERROR: ' + JSON.stringify(error, null, 2));
            }); 
    }
}
module.exports = getpokemonbynamecommand;