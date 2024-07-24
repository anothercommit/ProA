import { useState, useEffect } from 'react'
import Card from './components/Card';

// API key: 1dcbcd87

function App() {
    const [searchValue, setSearchValue] = useState('');
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    let movie = ''

    const handleChange = (event) => {
        movie = event.target.value
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearchValue(movie)
    };

    useEffect(() => {
        console.log("useEffect")
        if (searchValue) {
            console.log(searchValue)
            fetch(`http://www.omdbapi.com/?apikey=1dcbcd87&s=${searchValue}`)
                .then(res => res.json())
                .then(movies => setSearchedMovies(movies.Search))
                .then(console.log(...searchedMovies))
            // .then(setSavedMovies([...savedMovies, searchedMovies[0]]))
        }
    }, [searchValue]);

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

            <p>Search Value: {searchValue}</p>
            <p>Movie: {savedMovies[0]}</p>
        </>
    )
    // {savedMovies.forEach((m, id) => {
    //     <Card key={id} title={m.Title} year={m.Year} />
    // })}
}

export default App
