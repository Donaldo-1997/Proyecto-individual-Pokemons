import { Link } from "react-router-dom";
import pokemon_logo from '../img/pokemon-logo-black-transparent.png'

export default function Landing() {
    return (
        <div id="pokemon_background">
            <img src={pokemon_logo} alt="pokemon" className="pokemon_logo" />
            <Link to='/home'><button>Home</button></Link>
        </div>
           
    )
}