import { useState } from "react"
import Card from "./Card"

function CardContainer({ movies, onRemove }) {
  const [filter, setFilter] = useState("");

  const handleFilter = (event) => {
    setFilter(event.target.value)
  };

  const filterTitles = () => {
    return movies.filter((m) => m.Title.toLowerCase().includes(filter))
  }

  return (
    <>
      < section className="bg-gray-900" >
        <input
          type="search"
          id="movie-search"
          // value={searchValue}
          placeholder="filter movies"
          className="mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          onChange={handleFilter}
        />
        <div className="container px-6 py-10 mx-auto">
          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-4">
            {
              filterTitles().map((m, id) => (
                <>
                  <Card
                    key={id}
                    index={id}
                    title={m.Title}
                    plot={m.Plot}
                    year={m.Year}
                    poster={m.Poster}
                    onRemove={onRemove}
                  />
                </>
              ))
            }
          </div>
        </div>
      </section >
    </>
  )
}

export default CardContainer
