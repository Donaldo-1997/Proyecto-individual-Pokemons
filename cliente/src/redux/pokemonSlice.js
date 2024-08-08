import { createSlice } from "@reduxjs/toolkit"
import { filterAndOrderPokemons, removeDuplicates } from "../services/pokemon.services"

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: {
    pokemons: [],
    copyPokemons: [],
    pokemon: {},
    types: [],
    filter: [],
    popUp: {}
  },
  reducers: {
    getAllPokemons: (state, action) => {
      state.pokemons = removeDuplicates(action.payload)
      state.copyPokemons = removeDuplicates(action.payload)
    },
    getPokemonById: (state, action) => {
      state.pokemon = action.payload
    },
    filterPokemons: (state, action) => {
      const { activeFilters } = action.payload
      
      // console.log('FILTER_POKEMONS', activeFilters)
      state.pokemons = filterAndOrderPokemons(state.copyPokemons, activeFilters)
    },
    getPokemonByName: (state, action) => {
      state.pokemons = action.payload
    },
    getTypes: (state, action) => {
      state.types = action.payload
    },
    cleanDetail: (state, action) => {
      state.pokemon = action.payload
    },
    filtered: (state, action) => {
      state.filter = action.payload
    },
    deletePokemonAction: (state, action) => {
      state.pokemons = state.pokemons.filter(p => p.id !== action.payload)
    }
  }
})

export const { 
  getAllPokemons,
  getPokemonById,
  filterPokemons,
  getPokemonByName,
  getTypes,
  filtered,
  cleanDetail,
  deletePokemonAction
} = pokemonSlice.actions

export default pokemonSlice.reducer