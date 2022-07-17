import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { getPokemonByName } from "../redux/actions"

export default function SearchBar({ setNotFound }) {

    const dispatch = useDispatch()
    const history = useHistory()
    const [ name, setName ] = useState('')

    const handleChange = ({ target }) => {
        setName(target.value)
    } 

    const searchPokemon = (e) => {
        e.preventDefault()
        setName('')
        dispatch(getPokemonByName(name))
            .then(res => {
                // console.log('res:', res)
                history.push(`/detail/${name}`)
            })
            .catch(error => {
                // console.log('error:', error)
                setNotFound(error.response.data)
            })
    }
    return (
        <div className="search_by_name">
            <form onSubmit={searchPokemon}>
                <input onChange={handleChange} type="text" name="name" value={name} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}