import './Card.css'

export default function Card({ product }) {
    return (
        <div className="card-container">
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <img src={product.image} width="200px" />
        </div >
    );
}
