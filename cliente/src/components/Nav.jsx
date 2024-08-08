import React from "react";
import { Link, useLocation, useNavigation } from "react-router-dom";
import styled from "styled-components";
import pokemon_logo from '../assets/img/pokemon-logo-black-transparent.png'

function Nav ({ children }) {
    const location = useLocation()
    
    return (
        <NavBar>
            <Link to='/home'>
                <Logo src={pokemon_logo} alt="pokemon" />
            </Link>
            { children }
            <CreatePokemonLink>
                {location.pathname === '/home' 
                    ? <Link to='/create'>Create a Pokemon</Link>
                    : <Link to='/home'>Back</Link>
                }
            </CreatePokemonLink>
        </NavBar>
    )
}

export default React.memo(Nav)

const Logo = styled.img`
    width: 100px;	
`

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.247) 0px 4px 6px -1px, rgba(0, 0, 0, 0.324) 0px 2px 4px -1px;
    background-image: linear-gradient(305deg, #FF8F00, #AF47D2, #26355D);
`

const CreatePokemonLink = styled.div`
    a {
        color: white;
        text-decoration: none;
        border-radius: 20px;
        background-color: transparent;
        padding: 5px 10px;
        &:hover {  
            background-color: #fff;
            color: #15172b;
        }
    }
`



