import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import { getPokemonById } from "../redux/pokemonSlice"
import { useState } from "react"
import DetailPokemon from "./DetailPokemon"

export default function PokemonCard ({ pokemon }) {
    const { id, image, name, types, attack } = pokemon
    const [ showMoreInfo, setShowMoreInfo ] = useState(false)
    const dispatch = useDispatch()
    const { pokemons } = useSelector(state => state.pokemons)

    const showDetails = () => {
        const pokemon = pokemons.find(p => p.id === id)
        dispatch(getPokemonById(pokemon))
        setShowMoreInfo(!showMoreInfo)
    }

    return (
        <Container onClick={showDetails}>
        <Card>
            <div>
                <img src={image} alt="pokemon" />
            </div>
            <InfoPokemon>
                <h2>{name}</h2>
                <div>
                    {types && types.map((typeName, i) => (
                        <TypeCard key={i}>{typeName}</TypeCard>
                    ))}
                </div>
                <div>
                    <span>Attack</span>
                    <h2>{attack}</h2>
                </div>
            </InfoPokemon>
        </Card>
        { showMoreInfo && <DetailPokemon pokemon={pokemon} /> }
        </Container>
    )
}

const Container = styled.div`
    height: 5rem;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        transform: scale(1.02);
        cursor: pointer;
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    border-radius: 20px;
    background-color: #FFDB00;
    margin: 10px 0;
    & img {
        width: 60px;
    }
`

const InfoPokemon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 45rem;
    padding: 0 20px;
    text-align: center;
    color: black;

    & h2 {
        margin: 0;
        text-transform: uppercase;
    }
`

const TypeCard = styled.span`
    padding: 5px 10px;
    margin-left: 5px;
    background-color: #FF8F00;
    border-radius: 10px;
    color: black;
    display: inline-block;
`
