import React from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './PokemonCard.jsx';
import pokemonNotFound from '../assets/img/pokemon-go-1574001_1280.webp'
import spinner from '../assets/img/spinner.gif'
import styled from 'styled-components'

export const ContainerPokemons = ({ pokemons, notFound, setNotFound }) => {
  const { copyPokemons } = useSelector(state => state.pokemons)
  return (
    <Container>
      { notFound ? (
        <ContainerNotFound>
          <div className='header'> 
            <h1>{ notFound }</h1>
            <button onClick={() => setNotFound(null)}>←</button>
          </div>
          <NotFound>
              <img src={pokemonNotFound} alt="not-found" className='image_not_found' />
          </NotFound>
        </ContainerNotFound>
      ) : (
        pokemons.length ? (
          pokemons.map(pokemon => 
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
          />)
        ) : (
          <ContainerSpinner>
            { copyPokemons.length ? <h1>There are not pokemons!</h1> : <img src={spinner} alt="loading" /> }
          </ContainerSpinner> 
        )
      )}
    </Container>
  )
}

const ContainerSpinner = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 100vw;
  max-height: max-content;
  height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 20px;
  margin: 0;
`

const ContainerNotFound = styled.div`
  text-align: center;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 50%;
      font-size: 24px;
      font-weight: bold;
      background-color: transparent;
      color: white;

      &:hover {
        cursor: pointer;
        background-color: #FFDB00;
        color: black;
      }
    }
  }
`

const NotFound = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 30vw;
  }
`