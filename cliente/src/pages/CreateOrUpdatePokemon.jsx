import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { createPokemonAction, getTypes } from "../redux/pokemonSlice.js"
import { createPokemon, fetchTypes, popUpMessage, updatePokemon, validation } from "../services/pokemon.services"
import Nav from '../components/Nav.jsx'
import styled from "styled-components"
import { toast, Zoom } from "react-toastify"
import ToastStyled from "../components/ToastStyled.jsx"
    
export default function CreatePokemon () {

    const location = useLocation()
    const navigate = useNavigate()
    const pokemonToUpdate = location.state // De aquí vienen datos del componente detail
    const dispatch = useDispatch()
    const { types } = useSelector(state => state.pokemons)

    const [ errors, setErrors ] = useState({})
    const [ state, setState ] = useState({
        name: pokemonToUpdate ? pokemonToUpdate.name : '',
        image: pokemonToUpdate ? pokemonToUpdate.image :  '',
        hp: pokemonToUpdate ? pokemonToUpdate.hp :  '',
        attack: pokemonToUpdate ? pokemonToUpdate.attack :  '',
        defense: pokemonToUpdate ? pokemonToUpdate.defense :  '',
        speed: pokemonToUpdate ? pokemonToUpdate.speed :  '',
        height: pokemonToUpdate ? pokemonToUpdate.height :  '',
        weight: pokemonToUpdate ? pokemonToUpdate.weight :  '',
        types: pokemonToUpdate ? [...pokemonToUpdate.types] :  [],
        createdByUser: true   
    })


    useEffect(() => {
        try {
            const fetchData = async () => {
                const types = await fetchTypes()
                dispatch(getTypes(types))
            }
            
            fetchData()
        } catch (error) {
            throw error
        }
    }, [])


    const handleChange = ({ target }) => {
        // No consultar el estado desde aquí porque me dará un estado anterior

        if( target.name === 'types' ) {
            if(!state.types.includes(target.value)) {
                setState({ 
                    ...state, 
                    types: state.types.length <= 3 ? [...state.types, target.value] : state.types 
                })
                setErrors(validation({ ...state, types: [...state.types, target.value] }))

            } else setErrors({...errors, types: "Types cannot be repeated!"})

        } else {
            const newState = { ...state, [target.name]: target.value }
            setState(newState)
            setErrors(validation(newState))
        }
    }

    const deleteType = (name) => {
        const newTypes = state.types.filter(type => type !== name)
        setState({ 
            ...state, 
            types: newTypes 
        })
        // Tengo que pasarale el estado así para que valide el actual y no el anterior
        setErrors(validation({ 
            ...state, 
            types: newTypes 
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(Object.keys(errors).length === 0 && state.name.length > 0 ) {

            if(pokemonToUpdate) {     
                updatePokemon(pokemonToUpdate.id, state)
                    .then(response => {
                        setState({ name: '', image: '', height: '', weight: '', hp: '', 
                            attack: '', defense: '', speed: '', types: [] })
                        
                        navigate('/home', { 
                            state: { message: response }
                        })
                    })
                    .catch(error => {
                        popUpMessage({
                            message: error,
                            success: false
                        })
                    })

            } else {
                createPokemon(state)
                    .then(response => {
                        setState({
                            name: '', image: '', height: '', weight: '', hp: '', 
                            attack: '', defense: '', speed: '', types: []   
                        })
                        popUpMessage({
                            message: response,
                            success: true
                        })
                    })    
                    .catch(error => {
                        console.log(error)
                        popUpMessage({
                            message: error,
                            success: false
                        })
                    })
            }

        } 
        else setErrors(validation(state))
    }

    return (
        <>
        <ToastStyled />
        <Nav />
        <ContainerForm>
            <Form onSubmit={handleSubmit}>
                <GroupInput>
                    <InputContainer long>
                        <Input type="text" name='name' id='name' placeholder=" " 
                            onChange={handleChange} 
                            onKeyUp={() => validation(state)}
                            onBlur={() => validation(state)} 
                            value={ state.name }
                        />
                        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                        <Label htmlFor="name">Name*</Label>
                    </InputContainer>
                    <SubGroupInput>
                        <InputContainer>
                            <Input id="height" name="height"  type="text" placeholder=" " 
                                onChange={handleChange} 
                                onBlur={() => validation(state)}
                                value={state.height}
                            />
                            {errors.height && <ErrorMessage>{errors.height}</ErrorMessage>}
                            <Label htmlFor="height">Height</Label>
                        </InputContainer>
                        <InputContainer>
                            <Input id="weight" name="weight"  type="text" placeholder=" " 
                                onChange={handleChange} 
                                onBlur={() => validation(state)}
                                value={state.weight}
                            />
                            {errors.weight && <ErrorMessage>{errors.weight}</ErrorMessage>}
                            <Label htmlFor="weight">Weight</Label>
                        </InputContainer>
                        <InputContainer>
                            <Input id="hp" name='hp'  type="text" placeholder=" " 
                                onChange={handleChange} 
                                onBlur={() => validation(state)}
                                value={state.hp}
                            />
                            {errors.hp && <ErrorMessage>{errors.hp}</ErrorMessage>}
                            <Label htmlFor="hp">Hp</Label>
                        </InputContainer>
                        <InputContainer>
                            <Input id="attack" name='attack'  type="text" placeholder=" " 
                                onChange={handleChange} 
                                onBlur={() => validation(state)}
                                value={state.attack}
                            />
                            {errors.attack && <ErrorMessage>{errors.attack}</ErrorMessage>}
                            <Label htmlFor="attack">Attack</Label>
                        </InputContainer>
                        <InputContainer>
                            <Input id="defense" name='defense'  type="text" placeholder=" " 
                                onChange={handleChange} 
                                onBlur={() => validation(state)}
                                value={state.defense}
                            />
                            {errors.defense && <ErrorMessage>{errors.defense}</ErrorMessage>}
                            <Label htmlFor="defense">Defense</Label>
                        </InputContainer>
                        <InputContainer>
                            <Input id="speed" name='speed'  type="text" placeholder=" " 
                                onChange={handleChange} 
                                onBlur={() => validation(state)}
                                value={state.speed}
                            />
                            {errors.speed && <ErrorMessage>{errors.speed}</ErrorMessage>}
                            <Label htmlFor="speed">Speed</Label>
                        </InputContainer>
                    </SubGroupInput>
                </GroupInput>
                <GroupInput>
                    <InputContainer>
                        <Input id="image" name="image"  type="text" placeholder=" " 
                            onChange={handleChange} 
                            onBlur={() => validation(state)}
                            value={state.image}
                        />
                        {errors.image && <ErrorMessage>{errors.image}</ErrorMessage>}
                        <Label htmlFor="image">Url image</Label>
                    </InputContainer>
                    <div>
                        <ContentSelect>
                            <select title="types" name='types' onChange={handleChange} >
                                {types && types.map((type, i) => (
                                    <Option key={i} value={type}>{type}</Option>
                                ))}
                            </select>
                            <i></i>
                        </ContentSelect>
                        <ContainerButtonType>
                            {state.types && state.types.map((typeName, i) => (
                                typeName && 
                                <ButtonType
                                    key={i}
                                    onClick={() => deleteType(typeName)} 
                                >
                                    <button>{typeName}</button> 
                                    <div>X</div>
                                </ButtonType>
                            ))}
                        </ContainerButtonType>
                        {errors.types && <ErrorMessage className="types">{errors.types}</ErrorMessage>}
                    </div>
                </GroupInput>
                <ContainerSubmit >
                    <input type="submit" value={pokemonToUpdate ? 'Update' : 'Create'} />
                </ContainerSubmit>
            </Form>
        </ContainerForm>
        </>
    )
}

const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    width: auto;
    margin-top: 10px;
	padding: 0 20px;
	position: relative;
    overflow: auto;
`

const Form = styled.form`
    display: grid;
	gap: 0 20px;
	grid-template-columns: 47% 50%;
	background-color: ${props => props.theme.colors.light};
	border-radius: 20px;
	box-sizing: border-box;
	height: 80vh;
	padding: 35px 20px;
	width: 50rem;
`

const GroupInput = styled.div`
    /* display: flex; */
`

const SubGroupInput = styled.div`
    display: grid;
	grid-template-columns: 1fr 1fr;
    grid-template-rows: 3fr;
    gap: 5px;
`

const InputContainer = styled.div`
    height: 15vh;
	position: relative;
`


const Input = styled.input`
    background-color: ${props => props.theme.colors.light};
	border: 0;
    border-bottom: 2px solid #000;
	box-sizing: border-box;
	color: #000;
	font-size: 18px;
	height: 6vh;
	outline: 0;
	padding: 4px 5px 0;
	width: 100%;

    &:focus~.cut,
    &:not(:placeholder-shown)~.cut {
        transform: translateY(8px);
    }
`

const Label = styled.label`
    color: #000;
	left: 5px;
	line-height: 14px;
	pointer-events: none;
	position: absolute;
	transform-origin: 0 50%;
	transition: transform 200ms, color 200ms;
	top: 2vh;

    input:focus~&,
    input:not(:placeholder-shown)~& {
        transform: translateY(-5.2vh) translateX(-10px) scale(0.75);
    }
    input:not(:placeholder-shown)~& {
	    color: #000;
    }
    input:focus~& {
        color: #000;
        padding: 5px;
        border-radius: 20px;
    }
`

const ContainerSubmit = styled.div`
    grid-column: 1 / span 2;
	text-align: center;

    input {
        background-color: ${props => props.theme.colors.main};
        border-radius: 12px;
        border: 2px solid #000;
        box-sizing: border-box;
        color: #000;
        cursor: pointer;
        font-size: 18px;
        height: 50px;
        outline: 0;
        text-align: center;
        width: 100%;

        &:hover {
            transform: scale(1.01);
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
    }
`

const ContentSelect = styled.div`
    width: 100%;
	position: relative;
	grid-column: 1 / span 2;
    
    & select {
        appearance: none;
        display: inline-block;
        width: 100%;
        cursor: pointer;
        padding: 7px 10px;
        height: 42px;
        outline: 0; 
        border: 0;
        border-radius: 0;
        background-color: ${props => props.theme.colors.dark};
        color: #fff;
        font-size: 1em;
        border:2px solid rgba(0,0,0,0.2);
        border-radius: 12px;
        position: relative;
        transition: all 1.25s ease;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    & select::-ms-expand {
        display: none;
    }

    & i{
        position: absolute;
        right: 20px;
        top: calc(50% - 13px);
        width: 10px;
        height: 10px;
        display: block;
        border-left:4px solid #FF8F00;
        border-bottom:4px solid #FF8F00;
        transform: rotate(-45deg); /* Giramos el cuadrado */
        transition: all 0.25s ease;
    }
`

const Option = styled.option`
    padding: 0 30px 0 10px;
	min-height: 40px;
	display: flex;
	align-items: center;
	background: ${props => props.theme.colors.dark};
	border-top: #222 solid 1px;
	position: absolute;
	top: 0;
	width: 100%;
	pointer-events: none;
	order: 2;
	z-index: 1;
	transition: background 4s ease-in-out;
	box-sizing: border-box;
	overflow: hidden;
	white-space: nowrap;
`

const ErrorMessage = styled.span`
    position: relative;
	font-weight: bold;
	color: #fff;
	background-color: ${props => props.theme.colors.dark};
	padding: 3px 5px;
	border-radius: 5px;
	font-style: italic;
	font-size: 10px;
	z-index: 1;
`
const ContainerButtonType = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const ButtonType = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    width: 130px;
    height: 50px;
    align-items: center;
    button {
        padding: .50rem 1rem;
        margin: .5rem;
        margin-left: 0;
        border-radius: 10rem;
        color: #000;
        font-size: 1rem;
        letter-spacing: .15rem;
        background-color: ${props => props.theme.colors.main};
        border: none;
    }

    button, div {
        width: 6rem;
        height: 34px;
        transition: transform 0.5s ease; /* Transición de 0.5 segundos */
    }
    
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #0a000075;
        border-radius: 10rem;
        color: #FFF;
        position: absolute;
        top: 8px;
        left: -60px;
        transform: translateX(-40%);
        cursor: pointer;
    }
    &:hover div {
        transform: translateX(60px);
    }
`