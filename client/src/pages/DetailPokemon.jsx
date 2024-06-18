import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from "react-router-dom"
import { cleanDetail, deletePokemon, getPokemonById, getPokemonByName } from "../redux/actions"
import Nav from "../components/Nav"
import './StyleDetailPokemon.css'
import spinner from '../img/spinner.gif'

export default function DetailPokemon () {

    const history = useHistory()
    const { parameter } = useParams()
    const dispatch = useDispatch()
    const { pokemon } = useSelector(state => state)

    useEffect(() => {
        if(/^[a-zA-ZÀ-ÿ\s]{0,40}$/.test(parameter)) dispatch(getPokemonByName(parameter))
        else dispatch(getPokemonById(parameter))

        return () => dispatch(cleanDetail())
    }, [])

    const handleDeletePokemon = (id) => {
        const confirmation = window.confirm('Are you sure to delete?')
        if(confirmation) dispatch(deletePokemon(id))
            .then(message => history.push('/home', message)) // El segundo parametro es el "history.location.state"
            .catch(error => console.log(error))
    }

    // console.log(history);
    console.log(pokemon);

    return <>
        <Nav />
        <section className="container_pokemon_detail">
            <div className="image_block">
                <img src={pokemon.image ? pokemon.image : spinner } alt="pokemon" />
            </div>
            <div className="info_detail">
                <div className="back_btn">
                    <span onClick={() => history.goBack()}>←</span>
                </div>
                <h2>Name: <i>{ pokemon.name }</i></h2>
                <h4>Height: <i>{ pokemon.height ? pokemon.height : 'Undefined' }</i></h4>
                <h4>Weight: <i>{ pokemon.weight ? pokemon.weight : 'Undefined' }</i></h4>
                <h4>Hp: <i>{ pokemon.hp ? pokemon.hp : 'Undefined' }</i></h4>
                <h4>Attack: <i>{ pokemon.attack ? pokemon.attack : 'Undefined' }</i></h4>
                <h4>Defense: <i>{ pokemon.defense ? pokemon.defense : 'Undefined' }</i></h4>
                <h4>Speed: <i>{ pokemon.speed ? pokemon.speed : 'Undefined' }</i></h4>
                <div className="container_types">
                    <h4>Types: </h4>
                    {pokemon.types && pokemon.types.map((typeName, i) => (
                        <span className="type_card  " key={i}>{ typeName }</span>
                    ))}
                </div>
                { isNaN(pokemon.id) ? <div>
                    <Link to={{ pathname: '/create', state: pokemon }}>
                        <button className="button_detail edit">Edit pokemon</button>
                        {/* <button onClick={() => history.push('/create', pokemon)} className="button_detail edit">Edit pokemon</button> */}
                    </Link>
                    <button onClick={() => handleDeletePokemon(pokemon.id)} className="button_detail delete">Delete pokemon</button>
                </div> : null }
            </div>
        </section>
    </>
}