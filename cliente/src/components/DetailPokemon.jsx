import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { cleanDetail, deletePokemonAction } from "../redux/pokemonSlice"
import { deletePokemon, popUpMessage } from "../services/pokemon.services"
import styled from "styled-components"
import spinner from '../assets/img/spinner.gif'

export default function DetailPokemon ({ pokemon }) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {

        return () => dispatch(cleanDetail())
    }, [])

    const handleDeletePokemon = (id) => {
        const confirmation = window.confirm('Are you sure to delete?')
        if(confirmation) {
            deletePokemon(id)
                .then(res => {
                    popUpMessage({
                        message: res,
                        succes: true
                    })

                    dispatch(deletePokemonAction(id))
                }) 
                .catch(error => {
                    popUpMessage({
                        message: error,
                        succes: false
                    })
                })
        }
    }

    return <>
        <Container>
            <InfoDetail>
                <div>
                    <h5>Height: <i>{ pokemon.height }</i></h5>
                    <h5>Weight: <i>{ pokemon.weight }</i></h5>
                    <h5>Hp: <i>{ pokemon.hp }</i></h5>
                    <h5>Defense: <i>{ pokemon.defense }</i></h5>
                    <h5>Speed: <i>{ pokemon.speed }</i></h5>
                </div>
                { pokemon.createdByUser && (
                    <div>
                        <Button edit onClick={() => navigate('/create', { state: pokemon })} >Edit pokemon</Button>
                        <Button onClick={() => handleDeletePokemon(pokemon.id)}>Delete pokemon</Button>
                    </div>)
                }
            </InfoDetail>
            <ImageBlock>
                <img src={pokemon.image ? pokemon.image : spinner } alt="pokemon" />
            </ImageBlock>
        </Container>
    </>
}

const Container = styled.section`
    display: flex;
    border-radius: 20px;
    background-color: #15172b;
    padding: 10px 20px;
`

const ImageBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow: hidden;

    & img {
	    height: 100%;
	    transition: 0.25s;
    }
`

const InfoDetail = styled.div`
    height: 20rem;
    margin: 0;
    padding: 30px;
    background-color: #15172b;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    color: white;
    line-height: 1;
    transition: 0.25s;
`

const Types = styled.div`
    display: flex;
    align-items: center;
`

const Button = styled.button`
    border-radius: 10px;
	color: #fff;
	height: 30px;
	border: none;
	cursor: pointer;
	padding: 0 10px;
	margin-top: 10px;
    background-color: ${(props) => props.edit ? '#1cb8a3' : '#ff0000'};
`

const TypeCard = styled.span`
    padding: 5px 10px;
    margin-left: 5px;
    background-color: #ff2c2c;
    border-radius: 10px;
`
