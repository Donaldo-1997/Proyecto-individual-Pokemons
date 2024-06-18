import axios from "axios"
import { API_URL } from "../redux/actions"

export const createPokemon = async (pokemonData) => {
    try {
        const data = await axios.post(`${API_URL}`, pokemonData)
        return data
        
    } catch (error) {
        throw error
    }
}

export const updatePokemon = async (id, pokemonUpdated) => {
    try {
        const data = await axios.put(`${API_URL}/${id}`, pokemonUpdated)
        return data
        
    } catch (error) {
        throw error
    }
}

export const orderPokemons = (pokemons, orderingType, activeFilters) => {

    if (activeFilters.type) {
        const pokemonsFiltered = pokemons.filter(poke => poke.types.includes(activeFilters.type))
        
        return orderingType === 'ASC' ? 
            pokemonsFiltered.sort((a, b) => a.name.localeCompare(b.name)) 
            : pokemonsFiltered.sort((a, b) => b.name.localeCompare(a.name))
    } 

    if(activeFilters.from) {
        const pokemonsFiltered = activeFilters.from === 'created' ? pokemons.filter(poke => isNaN(poke.id))
            : activeFilters.from === 'api' ? pokemons.filter(p => !isNaN(p.id))
            : pokemons
        
        return pokemonsFiltered
    }

    return orderingType === 'ASC' ? 
        pokemons.sort((a, b) => a.name.localeCompare(b.name)) 
        : pokemons.sort((a, b) => b.name.localeCompare(a.name)) 
}