import axios from "axios"

export const createPokemon = async (pokemonData) => {
    try {
        const data = await axios.post(`https://pokemon1997.herokuapp.com/pokemons`, pokemonData)
        return data
        
    } catch (error) {
        throw error
    }
}

export const updatePokemon = async (id, pokemonUpdated) => {
    try {
        const data = await axios.put(`https://pokemon1997.herokuapp.com/pokemons/${id}`, pokemonUpdated)
        return data
        
    } catch (error) {
        throw error
    }
}