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
      state.pokemons = action.payload
      state.copyPokemons = action.payload
    },
    getPokemonById: (state, action) => {
      state.pokemon = action.payload
    },
    filterPokemons: (state, action) => {
      const { activeFilters } = action.payload
      
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
    createPokemonAction: (state, action) => {
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
  createPokemonAction,
  deletePokemonAction
} = pokemonSlice.actions

export default pokemonSlice.reducer