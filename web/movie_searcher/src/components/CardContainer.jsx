import Card from "./Card"

function CardContainer({ movies }) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          {
            movies.map((m, id) => (
              <Card key={id} title={m.Title} plot={m.Plot} year={m.Year} poster={m.Poster} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default CardContainer
