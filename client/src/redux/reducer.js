import { orderPokemons } from "../services/pokemon.services"
import { CLEAN_DETAIL, DELETE_POKEMON, GET_ALL_POKEMONS, GET_POKEMON_BY_ID, GET_POKEMON_BY_NAME, GET_POKEMON_BY_TYPE, GET_POKEMON_FROM, GET_POKEMON_IN_ORDER, GET_TYPES } from "./actions"

const initialState = {
	pokemons: [],
	copyPokemons: [],
	pokemon: {},
	types: [],
	filter: []
}

export default function rootReducer(state = initialState, action) {
	const { copyPokemons } = state

	if (action.type === GET_ALL_POKEMONS) {
		return {
			...state,
			pokemons: state.pokemons.length ? state.pokemons : action.payload,
			copyPokemons: action.payload
		}
	}
	if (action.type === GET_POKEMON_BY_ID) {
		return {
			...state,
			pokemon: action.payload
		}
	}
	if (action.type === GET_POKEMON_BY_NAME) {
		return {
			...state,
			pokemon: action.payload
		}
	}
	if (action.type === GET_TYPES) {
		return {
			...state,
			types: action.payload
		}
	}
	if (action.type === GET_POKEMON_BY_TYPE) {
		return {
			...state,
			pokemons: action.payload !== 'alls' ? copyPokemons.filter(p => p.types.includes(action.payload)) : copyPokemons
		}
	}
	if (action.type === GET_POKEMON_FROM) {
		return {
			...state,
			pokemons: action.payload === 'created' ? copyPokemons.filter(p => isNaN(p.id))
				: action.payload === 'api' ? copyPokemons.filter(p => !isNaN(p.id))
					: copyPokemons
		}
	}
	if (action.type === GET_POKEMON_IN_ORDER) {
		const { orderingType, activeFilters } = action.payload
		return {
			...state,
			pokemons: orderPokemons(copyPokemons, orderingType, activeFilters)
		}
	}

	if (action.type === CLEAN_DETAIL) {
		return { ...state, pokemon: action.payload }
	}

	if (action.type === DELETE_POKEMON) {
		return {
			...state,
			pokemons: state.pokemons.filter(pokemon => pokemon.id !== action.payload)
		}
	}

	if (action.type === 'FILTERED') {
		return {
			...state,
			filter: action.payload
		}
	}

	return state
}