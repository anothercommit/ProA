import { useState, useEffect } from 'react'
import CardContainer from './components/CardContainer';
import Dropdown from './components/Dropdown';

function App() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [browse, setBrowse] = useState(false);
  const [movie, setMovie] = useState("");
  // const [savedMovies, setSavedMovies] = useState([]);
  const APIKEY = '1dcbcd87';

  const hcBrowse = (event) => {
    setMovie(event.target.value);
  };


  const addMovie = (title) => {
    setSearchedMovies([]);

    fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=${title}`)
      .then(res => res.json())
      .then(m => setSavedMovies([...savedMovies, m]))
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

  const removeSaved = (i) => {
    setSavedMovies([...savedMovies.slice(0, i), ...savedMovies.slice(i + 1)]);
  }

  const terminator = [
    {
      Title: "Terminator",
      Year: "1001",
      Poster: "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
  ];

  return (
    <>
      <div className='flex justify-center'>
        <form action="GET">
          <label htmlFor="movie-search">Busque el nombre de una peli</label>
          <input
            className="mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            type="search"
            id="movie-search"
            // value={searchValue}
            placeholder="search movie"
            onChange={hcBrowse}
          />
          <button type='submit' className='border-4 rounded-lg bg-gray-200' onClick={handleSubmit}>Buscar</button>
        </form>
      </div>
      <Dropdown movies={searchedMovies} onSelect={addMovie} />
      <CardContainer movies={savedMovies} onRemove={removeSaved} />
    </>
  )
}

export default App
