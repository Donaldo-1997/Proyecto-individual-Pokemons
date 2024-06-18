import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import pokemon_logo from '../img/pokemon-logo-black-transparent.png'
import { getAllPokemons, getTypes } from '../redux/actions';

export default function Landing() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPokemons())
        dispatch(getTypes())
    }, [])

    return (
        <div id="pokemon_background">
            <img src={pokemon_logo} alt="pokemon" className="pokemon_logo" />
            <Link to='/home'><button>Home</button></Link>
        </div>
           
    )
}