import axios from "axios"
import { toast, Zoom } from "react-toastify"

const API_URL = import.meta.env.VITE_API_URL

export async function fetchAllPokemons() {
    try {
        const pokemons = await fetchWithRetry(`${API_URL}/pokemons`)
        pokemons.forEach(e => e.types = e.types.map(t => t.name))
    
        return pokemons
    } catch (error) {
        throw error
    }
}

export async function fetchPokemonByName(name) {
    try {
        const { data } = await axios.get(`${API_URL}/pokemons?name=${name}`)
        data.forEach(e => e.types = e.types.map(t => t.name))
        
        return data
    } catch (error) {
        throw error
    }
}

export async function fetchTypes() {
    try {
        const types = (await axios.get(`${API_URL}/types`)).data.map(t => t.name)
        return types
    } catch (error) {
        throw error
    }
}

export const createPokemon = async (pokemonData) => {
    try {
        const data = await axios.post(`${API_URL}/pokemons`, pokemonData)
        return data
        
    } catch (error) {
        throw error
    }
}

export const updatePokemon = async (id, pokemonUpdated) => {
    try {
        const data = await axios.put(`${API_URL}/pokemons/${id}`, pokemonUpdated)
        return data
        
    } catch (error) {
        throw error
    }
}

export const deletePokemon = async (id) => {
    try {
        const data = await axios.delete(`${API_URL}/pokemons/${id}`)
        return data
    } catch (error) {
        
    }
}

export function filterAndOrderPokemons(copyPokemons, activeFilters) {
    const { type, from, order, by } = activeFilters
   
    const filteredByType = type === 'alls'
        ? copyPokemons
        : copyPokemons
            .filter(poke => poke.types.includes(type))

    const filteredByFrom = from === 'created' 
    ? filteredByType.filter(poke => poke.createdByUser)
    : from === 'api' 
        ? filteredByType.filter(poke => !poke.createdByUser)
        : filteredByType

    if(by === 'name') {
        return order === 'ASC' 
            ? filteredByFrom
                .sort((a, b) => a.name.localeCompare(b.name)) 
            : filteredByFrom
                .sort((a, b) => b.name.localeCompare(a.name)) 
    }

    return order === 'ASC' 
        ? filteredByFrom
            .sort((a, b) => parseInt(a.attack) - parseInt(b.attack)) 
        : filteredByFrom
            .sort((a, b) => parseInt(b.attack) - parseInt(a.attack)) 
}

export function removeDuplicates(array) {
    return Array.from(
        new Set(array.map(e => JSON.stringify(e)))
    ).map(e => JSON.parse(e))
}

export const fetchWithRetry = async (url, options = {}, retries = 5, delay = 1000) => {
    try {
      const response = await axios(url, options)
      return response.data 
    } catch (error) {
      if (retries > 0) {
        console.error(`Error en la solicitud, reintentando en ${delay / 1000} segundos...`, error)
        await new Promise(resolve => setTimeout(resolve, delay))
        return fetchWithRetry(url, options, retries - 1, delay)
      } else {
        throw new Error(`La solicitud ha fallado después de ${retries} reintentos: ${error.message}`)
      }
    }
}

export const validation = (state) => {
    const error = {}
    const onlyUrl = /[(http(s)?):(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*){0,255}$/
    const onlyLetters = /^[a-zA-ZÀ-ÿ\s]{0,40}$/

    if(state.name.length === 0) error.name = 'Complete this field!'
    if(!onlyLetters.test(state.name)) error.name = 'Field must be character only!'
    if(state.image && !onlyUrl.test(state.image)) error.image = 'Field must be a url!'
    if(state.hp && !/^[0-9]*$/.test(state.hp)) error.hp = 'Only numbers!'
    if(state.attack && !/^[0-9]*$/.test(state.attack)) error.attack = 'Only numbers!'
    if(state.defense && !/^[0-9]*$/.test(state.defense)) error.defense = 'Only numbers!'
    if(state.speed && !/^[0-9]*$/.test(state.speed)) error.speed = 'Only numbers!'
    if(state.height && !/^[0-9]*$/.test(state.height)) error.height = 'Only numbers!'
    if(state.weight && !/^[0-9]*$/.test(state.weight)) error.weight = 'Only numbers!'
    if(state.hp && (state.hp > 100 || state.hp < 0)) error.hp = 'Must be in the range 0 to 100'
    if(state.attack && (state.attack > 100 || state.attack < 0)) error.attack = 'Must be in the range 0 to 100'
    if(state.defense && (state.defense > 100 || state.defense < 0)) error.defense = 'Must be in the range 0 to 100'
    if(state.speed && (state.speed > 100 || state.speed < 0)) error.speed = 'Must be in the range 0 to 100'
    if(state.height && (state.height > 100 || state.height < 0)) error.height = 'Must be in the range 0 to 100'
    if(state.weight && (state.weight > 100 || state.weight < 0)) error.weight = 'Must be in the range 0 to 100'
    if(state.types.length === 0) error.types = 'Select at least one type!'
    if(state.types.length > 3) error.types = 'You can only select three types!'

    return error
}

export const popUpMessage = ({ message, success }) => {
    toast(message, {
        position: "top-center",
        autoClose: 2000,
        closeButton: false,
        transition: Zoom,
        icon: false,
        hideProgressBar: true,
        style: {
            backgroundColor: success ? '#18aed7' : '#FFDB00',
            color: '#000'
        } 
    });
}