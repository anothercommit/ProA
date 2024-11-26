import "./ProductCard.css";

export default function ProductCard({ product }) {
    return (
        <>
            <div className="cardContainer">
                <p>
                    <b>{product.title}</b>
                </p>
                <p>{`\$${product.price} (${product.category})`}</p>
                <p>{product.description}</p>
                <img src={product.image} />
            </div>
        </>
    );
}
