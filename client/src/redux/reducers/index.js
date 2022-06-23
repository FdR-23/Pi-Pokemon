import {
    GET_ALL_POKEMONS,
    POST_POKEMONS,
    GET_BY_ID,
    GET_TYPES,
    GET_BY_NAME,
    FILTER_BY_TYPE,
    FILTER_CREATE_BY,
    FILTER_ASC_DES,
    FILTER_BY_ATTACK,
    CLEAR_DETAIL,

} from '../actions/index.js'

const initialState = {
    pokemons: [],
    pokemonsId: {},
    pokemosType: [],
    copyPokemos: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                copyPokemos: action.payload
            }
            case CLEAR_DETAIL:
            return {
                ...state,
                pokemonsId: []
            }    
        case POST_POKEMONS:
            return {
                ...state
            }
        case GET_BY_ID:
            return {
                ...state,
                pokemonsId: action.payload,
            }
       

        case GET_TYPES:
            return {
                ...state,
                pokemosType: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                pokemons: action.payload
            }
        case FILTER_BY_TYPE:

            return {
                ...state,
                pokemons: action.payload
            }

        case FILTER_CREATE_BY:

            return {
                ...state,
                pokemons: action.payload,
            }
        case FILTER_ASC_DES:

            return {
                ...state,
                pokemons: action.payload,
            }
        case FILTER_BY_ATTACK:
            return {
                ...state,
                pokemons: action.payload
            }




        default: return state;
    }
};


export default rootReducer;