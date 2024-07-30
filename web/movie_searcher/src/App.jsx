import { useState, useEffect } from 'react'
import Input from './components/Input';
import CardContainer from './components/CardContainer';

function App() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [browse, setBrowse] = useState(false);
  const [movie, setMovie] = useState("");
  // const [savedMovies, setSavedMovies] = useState([]);
  const APIKEY = '1dcbcd87';

  const hcBrowse = (event) => {
    setMovie(event.target.value);
  };

  const hcFilter = (event) => {
    setSearchedMovies(searchedMovies.filter((m) => m.Title.includes(event.target.value)))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBrowse(true);
  };

  useEffect(() => {
    if (browse) {
      fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${movie}`)
        .then(res => res.json())
        .then(movies => setSearchedMovies(movies.Search))
      setBrowse(false)
    }
  }, [browse]);

  const terminator = {
    Title: "Terminator",
    Year: "1001",
    Poster: "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  }

  return (
    <>
      <label htmlFor="movie-search">Busque el nombre de una peli</label>
      <form action="GET">
        <input
          type="search"
          id="movie-search"
          // value={searchValue}
          placeholder="search movie"
          onChange={hcBrowse}
        />
        <button type='submit' onClick={handleSubmit}>Buscar</button>
      </form>

      <CardContainer movies={searchedMovies} />
    </>
  )
}

export default App
