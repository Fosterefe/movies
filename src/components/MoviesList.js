import React from 'react'
import '../styles/MoviesList.css'
import MovieCard from './MovieCard'

const MoviesList = ({ data }) => {

  
  return (
<div className='ml'>
    <div className='ml-c'>
        { data.length === 0 && (<h1>No results found.</h1>) } { data.map((movie, index) => (
        <MovieCard
            key={index}
            img={movie.Poster}
            title={movie.Title}
            year={movie.Year}/>
        )) }
    </div>
</div>
  )
}

export default MoviesList