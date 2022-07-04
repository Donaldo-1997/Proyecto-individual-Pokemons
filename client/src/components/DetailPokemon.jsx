import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from "react-router-dom"
import { cleanDetail, deletePokemon, getPokemonById, getPokemonByName } from "../redux/actions"
import Nav from "./Nav"
import './StyleDetailPokemon.css'

export default function DetailPokemon () {

    const history = useHistory()
    const { parameter } = useParams()
    const dispatch = useDispatch()
    const { pokemon } = useSelector(state => state)

    console.log(pokemon);

    useEffect(() => {
        if(/^[a-zA-ZÀ-ÿ\s]{0,40}$/.test(parameter)) dispatch(getPokemonByName(parameter))
        else dispatch(getPokemonById(parameter))

        return () => dispatch(cleanDetail())
    }, [])

    const handleDeletePokemon = (id) => {
        dispatch(deletePokemon(id))
            .then(message => history.push('/home', message)) // El segundo parametro es el "history.location.state"
            .catch(error => console.log(error))
    }

    return <>
        <Nav />
        <section className="container_pokemon_detail">
            <div className="image_block">
                <img src={pokemon.image} alt="pokemon" />
            </div>
            <div className="info_detail">
                <div className="back_btn"><span onClick={() => history.push('/home')}>←</span></div>
                <h2>Name: { pokemon.name }</h2>
                <h4>Height: { pokemon.height }</h4>
                <h4>Weight: { pokemon.weight }</h4>
                <h4>Hp: { pokemon.hp }</h4>
                <h4>Attack: { pokemon.attack }</h4>
                <h4>Defense: { pokemon.defense }</h4>
                <h4>Speed: { pokemon.speed }</h4>
                <div className="container_types">
                    <h4>Types: </h4>
                    {pokemon.types && pokemon.types.map((typeName, i) => (
                        <span className="type_card  " key={i}>{ typeName }</span>
                    ))}
                </div>
                { isNaN(pokemon.id) ? <div>
                    <button onClick={() => history.push('/create', pokemon)} className="button_detail edit">Edit pokemon</button>
                    <button onClick={() => handleDeletePokemon(pokemon.id)} className="button_detail delete">Delete pokemon</button>
                </div> : null }
            </div>
        </section>
    </>
}