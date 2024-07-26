import { useState, useEffect } from 'react'
import Card from './components/Card';
import movieObject from './movieObject';

function App() {
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const APIKEY = '1dcbcd87';
    let movie = '';
    let browse = false;

    const handleChange = (event) => {
        movie = event.target.value;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        browse = true;
    };

    useEffect(() => {
        console.log("useEffect");

        if (browse) {
            console.log(searchValue);

            fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchValue}`)
                .then(res => res.json())
                .then(movies => setSearchedMovies(movies.Search))
                .then(console.log(...searchedMovies))
            // .then(setSavedMovies([...savedMovies, searchedMovies[0]]))
        }

        browse = false;
    }, [browse]);

    return (
        <>
            <label htmlFor="movie-search">Busque el nombre de una peli</label>
            <form action="">
                <input
                    type="search"
                    id="movie-search"
                    // value={searchValue}
                    onChange={handleChange}
                    placeholder="Search..."
                />
                <button type='submit' onClick={handleSubmit}>Buscar</button>
            </form>
            {movieObject.Search.forEach((m, id) => {
                <Card key={id} title={m.Title} year={m.Year} />
            })}
        </>
    )
}

export default App
