function Input({ placeholder, variable }) {
    const handleChange = (event) => {
        variable = event.target.value;
    }

    return (
        <>
            <input
                type="search"
                id="movie-search"
                // value={searchValue}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </>
    )
}

export default Input
