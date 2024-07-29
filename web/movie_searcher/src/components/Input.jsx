function Input({ placeholder, onChange }) {
    return (
        <>
            <input
                type="search"
                id="movie-search"
                // value={searchValue}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    )
}

export default Input
