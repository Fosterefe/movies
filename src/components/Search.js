import React from 'react'
import '../styles/Search.css'
import { BiSearchAlt } from 'react-icons/bi'
import { useState } from 'react'
import { useRef } from 'react'

const Search = ({ term, search }) => {

  const movie = useRef('')

  const getSearchTerm = () => {
    search(movie.current.value)
  }

  return (
    <div className='Search'>
        <div className='s'>
            <input ref={movie} onChange={(e) => getSearchTerm()} placeholder='Search a movie' value={term}/>
            <BiSearchAlt className='svg'/>
        </div>
    </div>
  )
}

export default Search