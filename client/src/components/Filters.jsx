import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonByType, getPokemonFrom, getPokemonInOrder } from '../redux/actions';

function Filters({ setCurrentPage }) {

    const dispatch = useDispatch()
    const { types } = useSelector(state => state)
    const [filters, setFilters] = useState(null)

    const handleChange = (e) => {
        setCurrentPage(1)
        const { name, value } = e.target
        const newFilter = {
            ...filters,
            [name]: value
        }

        if(name === 'type') { 
            setFilters({ type: value })
            dispatch(getPokemonByType(value))
        }
        else if(name === 'from') {
            setFilters(newFilter)
            dispatch(getPokemonFrom(value, newFilter))
        }
        else if(name === 'order') {
            setFilters(newFilter)
            dispatch(getPokemonInOrder(value, newFilter))
        }
    }

    return (
        <>
            <div className="select_home">
                <span>Types:</span>
                <select onChange={handleChange} name="type">
                    <option value="alls">Alls</option>
                    {types && types.map((type, i) =>
                        <option className="option" key={i} value={type} >{type}</option>
                    )}
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
            <div className="select_home">
                <span>By: </span>
                <select onChange={handleChange} name="by" >
                    <option className="option" value="name">name</option>
                    <option className="option" value="attack">attack</option>
                </select>
                <i></i>
            </div>
        </>
    )
}

export default React.memo(Filters)