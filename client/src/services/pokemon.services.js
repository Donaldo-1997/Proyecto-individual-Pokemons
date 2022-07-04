import axios from "axios"

export const createPokemon = async (pokemonData) => {
    try {
        const data = await axios.post(`http://localhost:3001/pokemons`, pokemonData)
        return data
        
    } catch (error) {
        return error
    }
}

export const updatePokemon = async (id, pokemonUpdated) => {
    try {
        const data = await axios.put(`http://localhost:3001/pokemons/${id}`, pokemonUpdated)
        return data
        
    } catch (error) {
        return error
    }
}