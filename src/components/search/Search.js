import React from 'react'
import './Search.scss'

function Search() {
    return (
        <div className="Search">
            <input type="text" placeholder='Search by city ...' />
            <button className="search-button">Search</button>
      </div>
  )
}

export default Search