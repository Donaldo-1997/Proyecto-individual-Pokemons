import { useSelector } from "react-redux"
import PokemonCard from "./PokemonCard"
import spinner from '../img/spinner.gif'

let array = []

export default function ContainerCards ({ currentPokemons, typeFilter, valueFilter }) {


    if(typeFilter === 'order') {
        if(valueFilter === 'ASC') array = currentPokemons.sort((a, b) => a.name.localeCompare(b.name))
        else array = currentPokemons.sort((a, b) => b.name.localeCompare(a.name))

    } else if(typeFilter === 'types') {
        array = valueFilter === 'default' ? currentPokemons : currentPokemons.filter(p => p.types.includes(valueFilter))
    }
    else if(typeFilter === 'from') {
        if(valueFilter === 'Created') array = currentPokemons.filter(e => isNaN(e.id))
        else if(valueFilter === 'Api') array = currentPokemons.filter(e => !isNaN(e.id))
        else array = currentPokemons
    }
    // else if(typeFilter === 'name') {
    //     console.log('pokemon: ', pokemon)
    //     if(pokemon.status) array = []
    //     else array = [pokemon] 
    //     if(!array.length) return <div className="spinner"><h2>Pokemon not found</h2></div>
    // }
    else array = currentPokemons
    

    if(!array.length) {
        return <div className="spinner"><img src={spinner} alt="spinner" /></div>
    }

    return (
        array.map((e, i) => 
            <PokemonCard
                key={i}
                id={e.id}
                image={e.image}
                name={e.name}
                types={e.types}
            />
        )
    )
}