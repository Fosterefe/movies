import React from 'react'
import '../styles/MovieCard.css'


const MovieCard = ({img, title, year}) => {


  return (
<div className='mc'>
    <div className='img'>
        <img src={img}/>
    </div>
    <div className='mc-text'>
        <h3>{title}</h3>
        <p>{year}</p>
    </div>
</div>
  )
}

export default MovieCard