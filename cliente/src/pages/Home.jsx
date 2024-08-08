import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContainerPokemons } from '../components/ContainerPokemons';
import { getAllPokemons, getTypes } from '../redux/pokemonSlice.js';
import { fetchAllPokemons, fetchTypes, popUpMessage } from '../services/pokemon.services.js';
import styled from 'styled-components';
import Pagination from '../components/Pagination.jsx';
import Nav from '../components/Nav.jsx'
import Filters from '../components/Filters';
import SearchBar from "../components/SearchBar"
import ToastStyled from '../components/ToastStyled.jsx';
import { useLocation } from 'react-router-dom';


export default function Home() {
    const dispatch = useDispatch()
    const location = useLocation()
    console.log(location)
    const { pokemons } = useSelector(state => state.pokemons)
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
        if(location.state) {
            popUpMessage({
                message: location.state.message,
                success: true
            })
        }

        try {
            const fetchData = async () => {
                const pokemons = await fetchAllPokemons()
                const types = await fetchTypes()
                dispatch(getAllPokemons(pokemons))
                dispatch(getTypes(types))
            }
            
            fetchData()
        } catch (error) {
            console.log(error)
            throw error
        }
    }, []);

    // DEBUG - ZONE
    // console.log('pokemons:', pokemons);
    // console.log('currentPokemons:', currentPokemons);

    return (
        <>
        <ToastStyled />
        <Nav>
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
        </Nav>
        <Main>
            <ContainerFilter>
                <SearchBar setNotFound={setNotFound} />
                <Filters setCurrentPage={setCurrentPage} />
            </ContainerFilter>
            <ContainerPokemons 
                pokemons={currentPokemons}
                notFound={notFound}
                setNotFound={setNotFound}
            />
        </Main>
        </>
    )
}

const Main = styled.div`
    display: flex;
    margin-top: 20px;
`

const ContainerFilter = styled.div`
    height: min-content;
    width: min-content;
    padding: 0.5rem;
    background-color: #FFDB00;
    color: #26355D;
    border-radius: 0 20px 20px 0;
    align-self: flex-start;
`
