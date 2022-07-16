import { Link } from "react-router-dom"
import './StylePokemonCard.css'

export default function PokemonCard ({ id, image, name, types }) {
    return (
        <div className='card'>
            <Link to={{ pathname:`/detail/${id}`}} >
                <img src={image} alt="pokemon" />
            </Link>
            <div className='info_pokemon'>
                <h2>{name}</h2>
                <div>
                <p>Types: </p>
                    {types && types.map((typeName, i) => (
                        <span className='type_card' key={i}>{typeName}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}