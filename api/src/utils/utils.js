const { Pokemon, Type } = require('../db')

const axios = require('axios')


const Url = 'https://pokeapi.co/api/v2/pokemon?limit=40';



//-----LLAMADO DESDE LA API-----//
async function pokemonsApi() {
    try {
        const pokemons = await axios.get(Url)
        .then(info => info.data.results)
        .then(results => Promise.all(results.map(resp => axios(resp.url))))
        .then(url => url.map(resp => resp.data))
        
        arrayPokemonApi = pokemons.map(result => {
            return {
                id: result.id,
                name: result.name,
                types: result.types.map((elemento) => elemento.type.name),
                image: result.sprites.other['official-artwork'].front_default,
                attack: result.stats[1].base_stat,
            }
        })

        return arrayPokemonApi;
    } catch (error) {

    }
}

//-----LLAMADO DESDE LA BASE DE DATO-----//
async function pokemonDb() {
    const pokemonDbInfo = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }

    });

    //para que me llegue bien los types
    const pokemonDbInfo1 = pokemonDbInfo.map(el => el.dataValues)
    const pokemonDbInfo2 = pokemonDbInfo1.map(el => {
        if (el.createInDb) {
            el.types = el.types.map(element => element.name)
            return el
        }
    })



    return pokemonDbInfo2;
}
//CONECTO POKEMONS DE API Y DE DB PARA QUE CUANDO LLAME SE PUEDDA BUSCAR DE LOS DOS LADOS
async function allPokemons() {
    const apiPokemon = await pokemonsApi();
    const dbPokemon = await pokemonDb();
    const totalPokemon = apiPokemon.concat(dbPokemon);

    return totalPokemon;

}




//-----------BUSCAR POR ID EN LA API y en la DB----------//
async function allPokemonsId(id) {
    if (id < 10229) {//buscando en la api 10228 es el ulltimo pokemon
        const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(info => info.data)
        const pokeId = {
            id: pokemons.id,
            name: pokemons.name,
            image: pokemons.sprites.other['official-artwork'].front_default,
            types: pokemons.types.map(t => t.type.name),
            hp: pokemons.stats[0].base_stat,
            attack: pokemons.stats[1].base_stat,
            defense: pokemons.stats[2].base_stat,
            speed: pokemons.stats[5].base_stat,
            height: pokemons.height,
            weight: pokemons.weight,
        }

        return pokeId
    } else {
        const pokemonDbInfoId = await Pokemon.findByPk(id, {
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            }
        })
            ; // si hago console.log a  pokemonDbInfoId contiene  dataValues y dentro de dataValues 
        // esta types con su dataValue  y un ejemplo seria este : { id: 1, name: 'normal' }, 
        //tengo que acceder a los nombres para que me devuelva un arreglo con los nombre de los types

        const pokemonDbInfoId1 = pokemonDbInfoId.dataValues
        pokemonDbInfoId1.types = pokemonDbInfoId1.types.map(element => element.name)


        return pokemonDbInfoId1;
    }
}



module.exports = {
    allPokemons,
    allPokemonsId,

}