import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterPokemons } from '../redux/pokemonSlice';
import styled from "styled-components";

function Filters({ setCurrentPage }) {

    const dispatch = useDispatch()
    const { types } = useSelector(state => state.pokemons)
    const [activeFilters, setActiveFilters] = useState({
        type: 'alls',
        from: 'alls',
        order: 'ASC',
        by: 'name'
    })

    useEffect(() => {
        dispatch(
            filterPokemons({ activeFilters })
        )
    }, [])

    const handleChange = (e) => {
        setCurrentPage(1)
        const { name, value } = e.target
        const updatedFilters = {
            ...activeFilters,
            [name]: value
        }

        setActiveFilters(updatedFilters)
        
        dispatch(filterPokemons({
            activeFilters: updatedFilters
        }))
    }

    return (
        <>
            <ContainerSelect>
                <span>Types:</span>
                <Select 
                    title="types" 
                    name="type"
                    onChange={handleChange} 
                >
                    <option value="alls">Alls</option>
                    {types && types.map((type, i) =>
                        <Option key={i} value={type} >{type}</Option>
                    )}
                </Select>
            </ContainerSelect>
            <ContainerSelect>
                <span>From:</span>
                <Select 
                    title="from"
                    name="from"
                    onChange={handleChange} 
                >
                    <Option value="alls">Alls</Option>
                    <Option value="api">Api</Option>
                    <Option value="created">Created</Option>
                </Select>
            </ContainerSelect>
            <ContainerSelect>
                <span>Order:</span>
                <Select 
                    title="order"
                    name="order" 
                    onChange={handleChange} 
                >
                    <Option value="ASC">ASC</Option>
                    <Option value="DESC">DESC</Option>
                </Select>
            </ContainerSelect>
            <ContainerSelect>
                <span>By: </span>
                <Select 
                    title="by"
                    onChange={handleChange} 
                    name="by" 
                >
                    <Option value="name">name</Option>
                    <Option value="attack">attack</Option>
                </Select>
            </ContainerSelect>
        </>
    )
}

export default React.memo(Filters)

const Select = styled.select`
    display: inline-block;
	width: 60%;
	cursor: pointer;
    margin-left: 5px;
  	padding-left: 5px;
  	height: 35px;
  	outline: 0; 
  	border: 0;
	border-radius: 0;
	background-color: #26355D;
	color: #fff;
	font-size: 1em;
	border:2px solid rgba(0,0,0,0.2);
    border-radius: 12px;
    position: relative;
    transition: all 0.25s ease;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Option = styled.option`
    padding: 0 30px 0 10px;
	min-height: 40px;
	display: flex;
	align-items: center;
	background: ${props => props.theme.colors.main};
	border-top: #222 solid 1px;
    color: #000;
	position: absolute;
	top: 0;
	width: 100%;
	pointer-events: none;
	order: 2;
	z-index: 1;
	transition: background .4s ease-in-out;
	box-sizing: border-box;
	overflow: hidden;
	white-space: nowrap;

    &:hover {
        background-color: #000;
    }
`

const ContainerSelect = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 160px;
	position: relative;
    margin: 10px 0;
    color: #000;
`