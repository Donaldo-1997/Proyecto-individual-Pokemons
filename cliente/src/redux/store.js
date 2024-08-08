import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import pokemonReducer from './pokemonSlice'

export default configureStore({
  reducer: {
    pokemons: pokemonReducer
  }
})