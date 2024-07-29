function Card({ title, year }) {
    return (
        <div style={{ border: "2px solid black" }}>
            <h3>{title}</h3>
            <p>{year}</p>
        </div>
    )
}

export default Card
