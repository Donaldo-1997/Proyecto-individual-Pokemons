import React from "react";

export default function Pagination({ totalPokemons, limit, jumpToPage, prevPage, handleNext, handlePrev, nextPage, currentPage }) {
  
  const max = Math.ceil(totalPokemons / limit)
  const pageNumbers = []
  
  for (let i = 0; i < max; i++) {
    pageNumbers.push(i + 1)
  }


  return (
    <div className="paginated">
      { totalPokemons ? <span onClick={() => { jumpToPage(pageNumbers[0]) }} >1</span> : null }
      <button
        disabled={prevPage === 0 || !totalPokemons ? true : false}
        onClick={handlePrev}>Prev</button>

      { totalPokemons ? <p> {currentPage} de {pageNumbers.length}</p> : null }

      <button
        disabled={nextPage > pageNumbers.length || !totalPokemons ? true : false}
        onClick={handleNext}>Next</button>
      { totalPokemons ? <span onClick={() => { jumpToPage(pageNumbers.length) }} >{pageNumbers.length}</span> : null }
    </div>
  )
}