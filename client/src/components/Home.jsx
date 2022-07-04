import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons, getTypes, getPokemonByName, getPokemonByType, getPokemonFrom, getPokemonInOrder } from '../redux/actions';
import PokemonCard from './PokemonCard.jsx';
import Pagination from './Pagination.jsx';
import Nav from './Nav.jsx'
import { useHistory } from 'react-router-dom';

import pokemonNotFound from '../img/pokemon-go-1574001_1280.webp'
import spinner from '../img/spinner.gif'

import './StyleHome.css'
import MessagePopUp from './MessagePopUp';


export default function Home() {

    const history = useHistory()
    console.log(history);
    const dispatch = useDispatch()
    const { pokemons, types, pokemon, copyPokemons } = useSelector(state => state)

    const [ popUp, setPopUp ] = useState(null) // mensage flotante
    const [ name, setName ] = useState('')
    const [ notFound, setNotFound ] = useState(null)

    const [currentPage, setCurrentPage] = useState(1)
    const limit = 12
    const lastPokemon = currentPage * limit
    let currentPokemons = pokemons.slice((lastPokemon - limit), lastPokemon)
    const nextPage = currentPage + 1;
    const prevPage = currentPage - 1;


    const jumpToPage = (pag) => {
        setCurrentPage(pag)
    };
    const handleNext = () => {
        setCurrentPage(nextPage)
    }
    const handlePrev = () => {
        setCurrentPage(prevPage)
    }

    useEffect(() => {
        dispatch(getAllPokemons())
        dispatch(getTypes())

        if(history.location.state) setPopUp({ success: true, message: history.location.state })

        setTimeout(() => setPopUp(null), 3000) // Para quitar el mennsaje flotante
        
    }, []);


    const handleChange = (e) => {
        setCurrentPage(1)
        const { name, value } = e.target

        if(name === 'name') {
            setName(value)
            dispatch(getPokemonByName(value))
        }
        else if(name === 'types') dispatch(getPokemonByType(value))
        else if(name === 'from') dispatch(getPokemonFrom(value))
        else if(name === 'order') dispatch(getPokemonInOrder(value))
  
     }
 
     const searchPokemon = (e) => {
        e.preventDefault()
        const name = e.target[0].value

        if(pokemon.id) {
            setName('')
            history.push(`/detail/${name}`)
        }
        else {
            setNotFound('Pokemon not found!')
            setName('')
        }
     }

    return (
        <>
        { popUp ? <MessagePopUp show={popUp} /> : null}
        <Nav />
        <div className="allHome">
            <div className='nav_bar'>
                <div className="container_filter">
                    <div className="select_home">
                        <span>Types:</span>
                        <select onChange={handleChange} name="types">
                            <option value="alls">Alls</option>
                            {types && types.map((type, i) => (
                                <option className="option" key={i} value={type}>{type}</option>
                            ))}
                        </select>
                        <i></i>
                    </div>
                    <div className="select_home">
                        <span>From:</span>
                        <select onChange={handleChange} name="from">
                            <option className="option" value="alls">Alls</option>
                            <option className="option" value="api">Api</option>
                            <option className="option" value="created">Created</option>
                        </select>
                        <i></i>
                    </div>
                    <div className="select_home">
                        <span>Order:</span>
                        <select onChange={handleChange} name="order" >
                            <option className="option" value="ASC">ASC</option>
                            <option className="option" value="DESC">DESC</option>
                        </select>
                        <i></i>
                    </div>
                    <div className="search_by_name">
                        <form onSubmit={searchPokemon}>
                            <input onChange={handleChange} type="text" name="name" value={name} />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <Pagination 
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    totalPokemons={pokemons.length}
                    currentPage={currentPage}
                    limit={limit}
                    jumpToPage={jumpToPage}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />
            </div>
            <div className='container_pokemons' >
                { notFound ? 
                    <div>
                        <h1>{ notFound }</h1>
                        <img src={pokemonNotFound} alt="not-found" className='image_not_found' />
                        <div className="back_btn not_found"><span onClick={() => setNotFound(null)}>←</span></div>
                    </div>
                :
                    currentPokemons.length > 0 ? currentPokemons.map((c, i) => 
                            <PokemonCard
                                key={i}
                                id={c.id}
                                image={c.image}
                                name={c.name}
                                types={c.types} 
                            />)
                    : <div className="spinner">{ copyPokemons.length ? <h1>There are not pokemons!</h1> : <img src={spinner} alt="loading" /> }</div> 
                }
            </div>
        </div>
        </>
    )
}