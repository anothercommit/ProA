function Card({ title, year, img }) {
  return (
    <>
      <div className="relative">
        <img
          className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
          src={img}
        />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white dark:text-white">
        {title}
      </h3>
      <hr className="w-32 my-6 border-blue-500" />
      <p className="text-sm text-gray-400 dark:text-gray-400">
        {year}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore
      </p>
    </>
  )
}

export default Card
