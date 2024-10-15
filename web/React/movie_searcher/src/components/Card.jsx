function Card({ title, plot, year, poster, index, onRemove }) {
  return (
    <div className="relative">
      <button
        onClick={() => onRemove(index)}
        className="absolute top-0 right-0 m-2 p-1 border-2 border-red-500 rounded-lg text-red-500 hover:bg-red-500 hover:text-white"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 2a1 1 0 00-1 1v1H3a1 1 0 00-1 1v1a1 1 0 001 1h1v12a3 3 0 003 3h8a3 3 0 003-3V6h1a1 1 0 001-1V4a1 1 0 00-1-1h-2V1a1 1 0 00-1-1h-6a1 1 0 00-1 1v1H6zm2 1v1h8V3H8zm2 3a1 1 0 00-1 1v10a1 1 0 002 0V7a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v10a1 1 0 002 0V7a1 1 0 00-1-1z"
          />
        </svg>
      </button>

      <img className="object-cover w-full rounded-md h-96" src={poster} alt={`Poster of ${title}`} />

      <div className="relative max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
        <p className="font-semibold text-gray-800 dark:text-white md:text-xl">
          {title}
        </p>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
          {plot}
        </p>
        <p className="mt-3 text-sm text-blue-500">{year}</p>

      </div>
    </div>
  );
}

export default Card;
