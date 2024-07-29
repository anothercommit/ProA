import { useState, useEffect } from 'react'
import Input from './components/Input';
import Card from './components/Card';
import movieObject from './movieObject';

function App() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [browse, setBrowse] = useState(false);
  // const [savedMovies, setSavedMovies] = useState([]);
  const APIKEY = '1dcbcd87';
  let movie;

  const hcBrowse = (event) => {
    movie = event.target.value;
  };

  const hcFilter = (event) => {
    setSearchedMovies(searchedMovies.filter((m) => m.Title.includes(event.target.value)))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBrowse(true);
  };

  useEffect(() => {
    console.log("useEffect");
    if (browse) {
      console.log(movie);
      setSearchedMovies(movieObject.Search);
      // fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchValue}`)
      //     .then(res => res.json())
      //     .then(movies => setSearchedMovies(movies.Search))
      setBrowse(false)
    }
  }, [browse]);

  return (
    <>
      <label htmlFor="movie-search">Busque el nombre de una peli</label>
      <form action="GET">
        <Input placeholder={"The Terminator"} onChange={hcBrowse} />
        <button type='submit' onClick={handleSubmit}>Buscar</button>
      </form>

      <Input placeholder={"Filtrar por nombre"} onChange={hcFilter} />
      <section className="bg-gray-900 dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {
              searchedMovies.map((m, id) => (
                < Card key={id} title={m.Title} year={m.Year} />
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default App

