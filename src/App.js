import './App.css';
import Search from './components/Search';
import MoviesList from './components/MoviesList';
import { data } from './data'
import { useState } from 'react'

function App() {

  const [movies, setMovies] = useState(data)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchMovies, setSearchMovies] = useState([])

  const searchHandler = (searchTerm) => {

    setSearchTerm(searchTerm)

    if (searchTerm !== '') {
      const newMovies = movies.filter((m) => {
        return m.Title.replace(/\s/g, '').toLowerCase().includes(searchTerm.replace(/\s/g, '').toLowerCase())
      });
      setSearchMovies(newMovies)
    }
    else {
      setSearchMovies(movies)
    }

  }
  
  return (
    <div className="Movie">
      <Search term={searchTerm} search={searchHandler}/>
      <MoviesList data={searchTerm.length < 1 ? movies : searchMovies}  />
    </div>
  );
}

export default App;
