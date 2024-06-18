import axios from 'axios'

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS'
export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID'
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME'
export const GET_POKEMON_BY_TYPE = 'GET_POKEMON_BY_TYPE'
export const GET_POKEMON_FROM = 'GET_POKEMON_FROM'
export const GET_POKEMON_IN_ORDER = 'GET_POKEMON_IN_ORDER'
export const GET_TYPES = 'GET_TYPES'
export const CLEAN_DETAIL = 'CLEAN_DETAIL'
export const DELETE_POKEMON = 'DELETE_POKEMON'

export const API_URL = process.env.REACT_APP_API_URL

export const getAllPokemons = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${API_URL}/pokemons`)
            data.forEach(e => e.types = e.types.map(t => t.name))
    
            dispatch({ type: GET_ALL_POKEMONS, payload: data })
            
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

export const getPokemonById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${API_URL}/pokemons/${id}`)
    
            data.types = data.types && data.types.map(t => t.name)
    
            dispatch({ type: GET_POKEMON_BY_ID, payload: data })
            
        } catch (error) {
            throw error
        }
    }
}

export const getPokemonByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${API_URL}/pokemons?name=${name}`)
    
            data.types = data.types && data.types.map(t => t.name)
            
            dispatch({ type: GET_POKEMON_BY_NAME, payload: data })
            
            return data
        } catch (error) {
            throw error
        }
    }
}

export const getTypes = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${API_URL}/types`)
            dispatch({ type: GET_TYPES, payload: data.map(t => t.name)})
            
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}

export const getPokemonByType = (type) => {
    return { type: GET_POKEMON_BY_TYPE, payload: type }
}

export const getPokemonFrom = (origin, activeFilters) => {
    return { 
        type: GET_POKEMON_FROM, 
        payload: { origin, activeFilters } 
    }
}

export const getPokemonInOrder = (orderingType, activeFilters) => {
    return { 
        type: GET_POKEMON_IN_ORDER, 
        payload: { orderingType, activeFilters } 
    }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL, payload: {} }
}

export const deletePokemon = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`${API_URL}/pokemons/${id}`)
    
            dispatch({ type: DELETE_POKEMON, payload: id })
    
            return data
            
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}

export const filtered = (filter) => {
    return {
        type: 'FILTERED',
        payload: filter
    }
}
