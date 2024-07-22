import { useState } from 'react'
import './App.css'

function App() {
    const [searchValue, setSearchValue] = useState('');
    const [movie, setMovie] = useState('');

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    useEffect(() => {
        // fetch(``)
        //     .then(res => res.json())
        //     .then(json => setProducts(json))
        console.log(movie)
    }, [movie]);

    return (
        <>
            <label htmlFor="movie-search">Busque el nombre de una peli</label>
            <br />
            <br />
            <form action="GET">
                <input
                    type="search"
                    value={searchValue}
                    onChange={handleChange}
                    placeholder="Search..."
                />
                <button
                    type='submit'
                    onClick={() => setMovie(searchValue)}
                >
                    Buscar
                </button>
            </form>
            <p>Search Value: {searchValue}</p>
            <br />
            <br />
        </>
    )
}

export default App
