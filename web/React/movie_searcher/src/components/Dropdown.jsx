const Dropdown = ({ movies, onSelect }) => {
  return (
    { movies &&
    <div className="flex justify-center">
      <div className="relative inline-block">
        <div
          className="absolute -translate-x-1/2 z-10 w-80 py-2 mt-2 rounded-md bg-gray-800"
        >
          {movies.map((m, id) => (
            <a key={id}
              className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => onSelect(m.Title)}
            >
              <img className="object-cover mx-1 rounded-md w-12 h-12" src={m.Poster} alt="movie" />
              <div className="mx-1">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{m.Title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{m.Year}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
    }
  );
};

export default Dropdown;
