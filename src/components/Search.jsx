import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="Search-Input.svg" alt="Procurar" />
        <input type="text" name="" id="" placeholder="Procure entre milhares de filmes" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
    </div>
  )
}

export default Search
