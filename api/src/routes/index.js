const { Router } = require('express');
const { getPokemons, createPokemon, getPokemonById } = require('../controllers/PokemonCtrl.js');
const { getAllTypes } = require('../controllers/TypeCtrl.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




router.get('/pokemons', getPokemons)
router.get('/pokemons/:id', getPokemonById)
router.post('/pokemons/create', createPokemon)


router.get('/types', getAllTypes)
module.exports = router;
