function Card({ title, plot, year, poster }) {
  return (
    <>
      <div>
        <img className="relative z-10 object-cover w-full rounded-md h-96" src={poster} alt="Poster of {title}" />

        <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
          <p className="font-semibold text-gray-800 dark:text-white md:text-xl">
            {title}
          </p>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            {plot}
          </p>
          <p className="mt-3 text-sm text-blue-500">{year}</p>
        </div>
      </div>
    </>
  )
}

export default Card
