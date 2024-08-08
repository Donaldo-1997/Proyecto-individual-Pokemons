import React from "react";
import styled from "styled-components";

export default function Pagination({ totalPokemons, limit, jumpToPage, prevPage, handleNext, handlePrev, nextPage, currentPage }) {
  
  const max = Math.ceil(totalPokemons / limit)
  const pageNumbers = []
  
  for (let i = 0; i < max; i++) {
    pageNumbers.push(i + 1)
  }


  return (
    <Container>
      { totalPokemons ? <span onClick={() => { jumpToPage(pageNumbers[0]) }} >1</span> : null }
      <button
        type="button"
        disabled={prevPage === 0 || !totalPokemons ? true : false}
        onClick={handlePrev}>Prev</button>

      { totalPokemons ? <p> {currentPage} de {pageNumbers.length}</p> : null }

      <button
        type="button"
        disabled={nextPage > pageNumbers.length || !totalPokemons ? true : false}
        onClick={handleNext}>Next</button>
      { totalPokemons ? <span onClick={() => { jumpToPage(pageNumbers.length) }} >{pageNumbers.length}</span> : null }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  width: 300px;
  margin: 0 auto;

  button {
    border: none;
    background-color: ${props => props.theme.colors.dark};
    border-radius: 10px;
    width: 4rem;
    height: 2rem;
    color: #fff;
    box-shadow: #63636333 0px 2px 8px 0px;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      transform: scale(1.15);
      cursor: pointer;
    }
    &:disabled {
      background-color: transparent;
      border: 1px solid #15172b;
    } 
  }

  span{
    padding: 3px 10px;

    &:hover {
      background-color: #fff8f2;
      color: #15172b;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`