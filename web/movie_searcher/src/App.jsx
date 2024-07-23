import { useState, useEffect } from 'react'

// API key: 1dcbcd87

function App() {
    const [searchValue, setSearchValue] = useState('');
    const [movies, setMovies] = useState('');
    let movie = ''

    const handleChange = (event) => {
        movie = event.target.value
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearchValue(movie)
    };

    useEffect(() => {
        console.log(searchValue)
        fetch(`http://www.omdbapi.com/?apikey=1dcbcd87&s=${searchValue}`)
            .then(res => res.json())
            .then(json => setMovies([...movies, json]))
            .then(console.log(movies))
    }, [searchValue]);

    return (
        <>
            <label htmlFor="movie-search">Busque el nombre de una peli</label>
            <form action="">
                <input
                    type="search"
                    // value={searchValue}
                    onChange={handleChange}
                    placeholder="Search..."
                />
                <button type='submit' onClick={handleSubmit}>Buscar</button>
                <p>Search Value: {searchValue}</p>
                <p>Movie: {movie}</p>
            </form>
        </>
    )
}

export default App
