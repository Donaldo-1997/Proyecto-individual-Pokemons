import { useState } from "react"
import { useDispatch } from "react-redux"
import { getPokemonByName } from "../redux/pokemonSlice"
import styled from "styled-components"
import { fetchPokemonByName } from "../services/pokemon.services"

export default function SearchBar({ setNotFound }) {

    const dispatch = useDispatch()
    const [ name, setName ] = useState('')

    const handleChange = ({ target }) => {
        setName(target.value)
        setNotFound(null)
    } 

    const searchPokemon = (e) => {
        e.preventDefault()
        setName('')

        fetchPokemonByName(name)
            .then(res => {
                dispatch(getPokemonByName(res))
            })
            .catch(error => {
                setNotFound(error.response.data)
            })  
    }

    return (
        <form onSubmit={searchPokemon}>
        <InputContainer>
            <Input 
                onChange={handleChange} 
                type="text" 
                name="name" 
                value={name}
                id="search"
                placeholder=" "
                autoComplete="false"
                />
            <Label htmlFor="search">Search</Label>
        </InputContainer>
        </form>
    )
}

const Search = styled.div`

`
const InputContainer = styled.div`
    height: 7vh;
	position: relative;
`

const Input = styled.input`
    background-color: ${props => props.theme.colors.light};
    color: #000;
	padding: 4px 5px 0;
    border: 0;
    border-bottom: 2px solid #000;
	height: 5vh;
	width: 100%;
	outline: 0;
	box-sizing: border-box;
    &:focus~.cut,
    &:not(:placeholder-shown)~.cut {
        transform: translateY(8px);
    }
`

const Label = styled.label`
    color: #000;
	left: 5px;
	line-height: 14px;
	pointer-events: none;
	position: absolute;
	transform-origin: 0 50%;
	transition: transform 200ms, color 200ms;
	top: 2vh;

    input:focus~&,
    input:not(:placeholder-shown)~& {
        transform: translateY(-3.1vh) translateX(-5px) scale(0.50);
    }
    input:not(:placeholder-shown)~& {
	    color: #000;
    }
    input:focus~& {
        color: #000;
        padding: 5px;
        border-radius: 20px;
    }
`