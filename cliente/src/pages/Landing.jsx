import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import pokemon_logo from '../assets/img/pokemon-logo-black-transparent.png'
import backgroundImage from '../assets/img/toy-3633751_1280.jpg'
import { getAllPokemons, getTypes } from "../redux/pokemonSlice";
import styled from 'styled-components'
import { fetchAllPokemons, fetchTypes } from "../services/pokemon.services";

export default function Landing() {

    const dispatch = useDispatch()

    useEffect(() => {
        
        try {
            const fetchData = async () => {
                const pokemons = await fetchAllPokemons()
                const types = await fetchTypes()
    
                dispatch(getAllPokemons(pokemons))
                dispatch(getTypes(types))
            }
            
            fetchData()
        } catch (error) {
            throw error
        }
    }, [])

    return (
        <Container>
            <Logo src={pokemon_logo} alt="pokemon" />
            <Link to='/home'><Button>Home</Button></Link>
        </Container>
           
    )
}

const Container = styled.div`
    background-image: url(${backgroundImage});
	width: 99.7%;
	height: 100vh;
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`

const Logo = styled.img`
    width: 360px;
	margin-top: -250px;
`

const Button = styled.button`
    width: 120px;
	height: 50px;
	border-radius: 20px;
	background-color: #ffffff14;
	color: #000000;
	font-size: 24px;

    &:hover {
        background-color: #ff0;
        cursor: pointer;
        transform: scale(1.2);
    }
`