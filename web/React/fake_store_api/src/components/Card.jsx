import './Card.css'

export default function Card({ product }) {
    return (
        <div className="card-container">
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <img src={product.image} width="200px" alt="product image" />
        </div >
    );
}
