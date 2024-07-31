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
