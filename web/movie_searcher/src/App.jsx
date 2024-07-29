import { useState, useEffect } from 'react'
import Input from './components/Input';
import Card from './components/Card';
import movieObject from './movieObject';

function App() {
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [browse, setBrowse] = useState(false);
    const [savedMovies, setSavedMovies] = useState([]);
    const APIKEY = '1dcbcd87';
    let movie = '';

    const handleChange = (event) => {
        movie = event.target.value;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBrowse(true);
    };

    useEffect(() => {
        console.log("useEffect");
        if (browse) {
            console.log(movie);
            // fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchValue}`)
            //     .then(res => res.json())
            //     .then(movies => setSearchedMovies(movies.Search))
            // .then(setSavedMovies([...savedMovies, searchedMovies[0]]))
            setSavedMovies(movieObject);
            setBrowse(false)
        }
    }, [browse]);

    return (
        <>
            <label htmlFor="movie-search">Busque el nombre de una peli</label>
            <form action="">
                <Input onChange={handleChange} />
                <button type='submit' onClick={handleSubmit}>Buscar</button>
            </form>

            {
                savedMovies.map((m, id) => (
                    < Card key={id} title={m.Title} year={m.Year} />
                ))
            }
        </>
    )
}

export default App
