const { allPokemons, allPokemonsId } = require('../utils/utils.js')
const { Pokemon, Type } = require('../db.js')



//-----------BUSCAR POR NOMBRE----------//
async function getPokemons(req, res,) {
    try {
        const { name } = req.query;
        const totalPokemon = await allPokemons() // guardo en una variable el llamado de todo los poquemons tanto de db como de api
        if (name) {
            let pokemonName = await totalPokemon.filter((elemento) => elemento.name.toLowerCase() === name.toLowerCase()); 
            //aca estoy filtrado por nombre y viendo si el nombre pasado por //query existe en mi bd o en la api,
            // pero tambien los paso a miniscula ambos tanto mi listado de nombre como el pasado por query para evitar errores

            if (!pokemonName.length) {
                res
                    .status(200)
                    .send(pokemonName)
            } else {
                res
                    .status(404)
                    .send(`el pokemon ${name} no existe`)
            }

        } else {
            res
                .status(200)
                .send(totalPokemon)

        }

    } catch (error) {

    }


}


//-----------BUSCAR POR ID----------//


async function getPokemonById(req, res) {
    const { id } = req.params;
    try {
        const infoPokemon = await allPokemonsId(id);
        res
            .status(200)
            .json(infoPokemon);

    } catch (error) {
        res
            .status(404)
            .send(`No se encontró un Pokemon para el id: ${id}`);
    }
};




//-----------CREAR POKEMON----------//
ifRef = 11000;
async function createPokemon(req, res) {

    const {
        name, // name es obligatorio
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        types } = req.body

    //primero voy a comprobar de que no exista un pokemon con el nombre ingresado
    const findPokemon = await Pokemon.findOne({
        where: { name: name.toLowerCase() }
    })
    //a hora pregunto si existe un pokemon con ese nombre voy a mandar un mensaje
    if (findPokemon) {
        return res.json('Ya existe un pokemon con el mismo nombre')
    }

    const newPokemon = await Pokemon.create({
        id: ifRef++,
        name,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,

    })

    //pregunto si existe algo en el campo de nombre
    if (!name) {
        res.send('El nombre debe ser ingresado')
    }

    let dbTypes = await Promise.all( //Armo una variable que dentro tendra una resolucion de promesas
        types.map((e) => { // Agarro la data de types y le hago un map para verificar que cada elemento exista en nuestra tabla de types
            return Type.findOne({ where: { name: e } })
        })
    )

    await newPokemon.addType(dbTypes);

    res.send('pokemon creado')
}



module.exports = {
    getPokemons,
    createPokemon,
    getPokemonById
}