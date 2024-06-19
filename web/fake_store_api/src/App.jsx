import React, { useEffect, useState } from 'react';
import Card from "./components/Card";

export default function App() {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(6);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=${count}`)
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [count]);

    return (
        <>
            {
                products.map(p => (
                    <Card key={p.id} product={p} />
                ))
            }
            <button onClick={setCount(count + 1)}>+</button>
            <span>{count}</span>
            <button onClick={setCount(count - 1)}>-</button>
        </>
    );
}
