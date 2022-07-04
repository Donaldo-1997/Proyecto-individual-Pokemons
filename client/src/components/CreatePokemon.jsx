import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { getTypes, updatePokemon } from "../redux/actions"
import MessagePopUp from "./MessagePopUp.jsx"
import Nav from './Nav.jsx'
import './StyleCreatePokemon.css'

const validation = (state) => {

    // console.log('state: ', state);

    const error = {}
    const regexUrl = /[(http(s)?):(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*){0,255}$/

    if(state.name.length === 0) error.name = 'Complete this field!'
    if(!/^[a-zA-ZÀ-ÿ\s]{0,40}$/.test(state.name)) error.name = 'Field must be character only!'
    if(state.image && !regexUrl.test(state.image)) error.image = 'Field must be a url!'
    if(state.hp && !/^[0-9]*$/.test(state.hp)) error.hp = 'Only numbers!'
    if(state.attack && !/^[0-9]*$/.test(state.attack)) error.attack = 'Only numbers!'
    if(state.defense && !/^[0-9]*$/.test(state.defense)) error.defense = 'Only numbers!'
    if(state.speed && !/^[0-9]*$/.test(state.speed)) error.speed = 'Only numbers!'
    if(state.height && !/^[0-9]*$/.test(state.height)) error.height = 'Only numbers!'
    if(state.weight && !/^[0-9]*$/.test(state.weight)) error.weight = 'Only numbers!'
    if(state.hp && (state.hp > 100 || state.hp < 0)) error.hp = 'Must be in the range 0 to 100'
    if(state.attack && (state.attack > 100 || state.attack < 0)) error.attack = 'Must be in the range 0 to 100'
    if(state.defense && (state.defense > 100 || state.defense < 0)) error.defense = 'Must be in the range 0 to 100'
    if(state.speed && (state.speed > 100 || state.speed < 0)) error.speed = 'Must be in the range 0 to 100'
    if(state.height && (state.height > 100 || state.height < 0)) error.height = 'Must be in the range 0 to 100'
    if(state.weight && (state.weight > 100 || state.weight < 0)) error.weight = 'Must be in the range 0 to 100'
    if(state.types.length === 0) error.types = 'Select at least one type!'

    // console.log('error: ', error);

    return error
}

export default function CreatePokemon (props) {

    const pokemonToUpdate = props.history.location.state // De aquí vienen datos del componente detail

    const history = useHistory()
    const dispatch = useDispatch()
    const { types } = useSelector(state => state)

    const [ popUp, setPopUp ] = useState(null)
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
        types: pokemonToUpdate ? [...pokemonToUpdate.types] :  []
    })

    console.log(popUp);

    useEffect(() => {

        dispatch(getTypes())
        
    }, [])

    // useEffect(() => {}, [successfully])

    const handleChange = (e) => {
        // No consultar el estado desde aquí porque me dará un estado anterior

        if(e.target.name === 'types') {
            if(!state.types.includes(e.target.value)) {
                setState({ ...state, types: [...state.types, e.target.value] })
                setErrors(validation({ ...state, types: [...state.types, e.target.value] }))

            } else setErrors({...errors, types: "Types cannot be repeated!"})

        } else {
            setState({ ...state, [e.target.name]: e.target.value })
            setErrors(validation({ ...state, [e.target.name]: e.target.value }))
        }
    }

    const deleteType = (name) => {
        setState({ ...state, types: state.types.filter(type => type !== name) })
        // Tengo que pasarale el estado así para que valide el actual y no el anterior
        setErrors(validation({ ...state, types: state.types.filter(type => type !== name) }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(Object.keys(errors).length === 0 && state.name.length > 0 ) {

            if(pokemonToUpdate) {

                const res = dispatch(updatePokemon(pokemonToUpdate.id, state))
                res.then(data => {
                    setPopUp({ success: true, message: data })
                    setState({
                        name: '', image: '', height: '', weight: '', hp: '', 
                        attack: '', defense: '', speed: '', types: []   
                    })

                    history.push('/home', data)

                })
                .catch(error => console.log(error))
                // axios.put(`http://localhost:3001/pokemons/${pokemonToUpdate.id}`, state)
                // .then(res => {
                //     console.log(res);
                //     if(res.status === 200) {
                //         setPopUp({ success: true, message: res.data })
                //         setState({
                //             name: '', image: '', height: '', weight: '', hp: '', 
                //             attack: '', defense: '', speed: '', types: []   
                //         })

                //         history.push('/home', res.data)
                //     }
                //     else setPopUp({ success: false, message: res.data })
                // })
                // .catch(error => setPopUp({ success: false, message: error.data }))


            } else {

                axios.post('http://localhost:3001/pokemons', state)
                .then(res => {
                    if(res.status === 201) {
                        setPopUp({ success: true, message: res.data })
                        setState({
                            name: '', image: '', height: '', weight: '', hp: '', 
                            attack: '', defense: '', speed: '', types: []   
                        })

                    }
                    else setPopUp({ success: false, message: res.data })
                })
                .catch(error => {
                    setPopUp({ success: false, message: error.data })
                })
            }

            setTimeout(() => setPopUp(null), 3000) // Para quitar el mennsaje flotante
        } 
        else setErrors(validation(state))
    }

    return (
        <>
        { popUp ? <MessagePopUp show={popUp} /> : null }
        <Nav />
        <div className="container_form">
            <form onSubmit={handleSubmit} className="form">
                <div className="subtitle">Let's create your pokemon!</div>  
                <div className="input-container ic2">
                    <input type="text" name='name' id='name'className="input" placeholder=" " 
                        onChange={handleChange} 
                        onKeyUp={() => validation(state)}
                        onBlur={() => validation(state)} 
                        value={ state.name }
                    />
                    {errors.name && <span className="error_message">{errors.name}</span>}
                    <label htmlFor="name" className="placeholder">Name*</label>
                </div>
                <div className="input-container ic2">
                    <input id="image" name="image" className="input" type="text" placeholder=" " 
                        onChange={handleChange} 
                        onBlur={() => validation(state)}
                        value={state.image}
                    />
                    {errors.image && <span className="error_message">{errors.image}</span>}
                    <label htmlFor="image" className="placeholder">Url image</label>
                </div>
                <div className="input-container ic2">
                    <input id="height" name="height" className="input" type="text" placeholder=" " 
                        onChange={handleChange} 
                        onBlur={() => validation(state)}
                        value={state.height}
                    />
                    {errors.height && <span className="error_message">{errors.height}</span>}
                    <label htmlFor="height" className="placeholder">Height</label>
                </div>
                <div className="input-container ic2">
                    <input id="weight" name="weight" className="input" type="text" placeholder=" " 
                        onChange={handleChange} 
                        onBlur={() => validation(state)}
                        value={state.weight}
                    />
                    {errors.weight && <span className="error_message">{errors.weight}</span>}
                    <label htmlFor="weight" className="placeholder">Weight</label>
                </div>
                <div className="input-container ic2">
                    <input id="hp" name='hp' className="input" type="text" placeholder=" " 
                        onChange={handleChange} 
                        onBlur={() => validation(state)}
                        value={state.hp}
                    />
                    <label htmlFor="hp" className="placeholder">Hp</label>
                </div>
                <div className="input-container ic2">
                    <input id="attack" name='attack' className="input" type="text" placeholder=" " 
                        onChange={handleChange} 
                        onBlur={() => validation(state)}
                        value={state.attack}
                    />
                    {errors.attack && <span className="error_message">{errors.attack}</span>}
                    <label htmlFor="species" className="placeholder">Attack</label>
                </div>
                <div className="input-container ic2">
                    <input id="defense" name='defense' className="input" type="text" placeholder=" " 
                        onChange={handleChange} 
                        onBlur={() => validation(state)}
                        value={state.defense}
                    />
                    {errors.defense && <span className="error_message">{errors.defense}</span>}
                    <label htmlFor="species" className="placeholder">Defense</label>
                </div>
                <div className="input-container ic2">
                    <input id="speed" name='speed' className="input" type="text" placeholder=" " 
                        onChange={handleChange} 
                        onBlur={() => validation(state)}
                        value={state.speed}
                    />
                    {errors.speed && <span className="error_message">{errors.speed}</span>}
                    <label htmlFor="species" className="placeholder">Speed</label>
                </div>
                <div className="input-container ic2 content-select">
                    <div>
                        <select name='types' onChange={handleChange} >
                            {types && types.map((type, i) => (
                                <option className="option" key={i} value={type}>{type}</option>
                            ))}
                        </select>
                        <i></i>
                    </div>
                    {state.types && state.types.map((typeName, i) => (
                        typeName && <span key={i} className='typeBtn' 
                            onClick={() => deleteType(typeName)} 
                        >{typeName} <span>   x   </span></span> 
                    ))}
                    {errors.types && <span className="error_message types">{errors.types}</span>}
                </div>
                <div className="input-container-submit">
                    <button type="text" className="submit">{pokemonToUpdate ? 'Update' : 'Create'}</button>
                </div>
            </form>
        </div>
        </>
    )
}