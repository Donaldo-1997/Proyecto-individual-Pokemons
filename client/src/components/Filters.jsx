import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonByType, getPokemonFrom, getPokemonInOrder } from '../redux/actions';

function Filters({ setCurrentPage }) {

    const dispatch = useDispatch()
    const { types } = useSelector(state => state)

    const handleChange = (e) => {
        setCurrentPage(1)
        const { name, value } = e.target

        if(name === 'types') dispatch(getPokemonByType(value))
        else if(name === 'from') dispatch(getPokemonFrom(value))
        else if(name === 'order') dispatch(getPokemonInOrder(value))
    }

    console.log('componente Filters');
 
    return (
        <>
            <div className="select_home">
                <span>Types:</span>
                <select onChange={handleChange} name="types">
                    <option value="alls">Alls</option>
                    {/* <option value="alls">{filter.types ? filter.types : 'Alls'}</option> */}
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