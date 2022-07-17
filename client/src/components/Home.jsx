import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons, getPokemonByName, getPokemonByType, getPokemonFrom, getPokemonInOrder, getTypes } from '../redux/actions';
import PokemonCard from './PokemonCard.jsx';
import Pagination from './Pagination.jsx';
import Nav from './Nav.jsx'
import { useHistory } from 'react-router-dom';

import pokemonNotFound from '../img/pokemon-go-1574001_1280.webp'
import spinner from '../img/spinner.gif'

import './StyleHome.css'
import MessagePopUp from './MessagePopUp';
import Filters from './Filters';
import SearchBar from "./SearchBar"


export default function Home() {

    const history = useHistory()
    const dispatch = useDispatch()
    const { pokemons, copyPokemons } = useSelector(state => state)

    const [ popUp, setPopUp ] = useState(null) // mensage flotante
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
        if(!copyPokemons.length) {
            dispatch(getAllPokemons())
            dispatch(getTypes())
        }

        if(history.location.state) {
            setPopUp({ success: true, message: history.location.state })
            setTimeout(() => setPopUp(null), 3000) // Para quitar el mennsaje flotante
        }

        
    }, []);


    // DEBUG - ZONE
    console.log('pokemons:', pokemons);
    console.log('currentPokemons:', currentPokemons);

    return (
        <>
        { popUp ? <MessagePopUp show={popUp} /> : null}
        <Nav />
        <div className="allHome">
            <div className='nav_bar'>
                <div className="container_filter">
                    <Filters setCurrentPage={setCurrentPage} />
                    <SearchBar setNotFound={setNotFound} />
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