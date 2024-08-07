import React, { useEffect, useState } from 'react';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=5`)
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.log(error));
  }, []);

  const displayProducts = () => {
    if (products.length > 0)
      return products.map((p, id) => <Card key={id} product={p} />)

    else return <p>Loading...</p>
  }

  return (
    <>
      {displayProducts()}
    </>
  );
}

function Card({ product }) {
  return (
    <div className="card-container">
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img src={product.image} width="200px" alt="product image" />
    </div >
  );
}
