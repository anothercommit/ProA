import React, { useEffect, useState } from 'react';
import Card from "./components/Card";

export default function App() {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(6);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=${count}`)
            .then(res => res.json())
            .then(json => setProducts(json))
    }, []);

    function decrementCount() {
        setCount(count - 1);
    }

    function incrementCount() {
        setCount(count + 1);

        if (count > products.length) {
            const newProduct = fetch(`https://fakestoreapi.com/products/${count}`).then(res => res.json())
            setProducts(prevProducts => [...prevProducts, newProduct])
        }
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span> {count} </span>
            <button onClick={incrementCount}>+</button>

            {console.log(products)}
            {
                products.slice(0, count).map((p, i) => (
                    <Card key={p.id} product={p} num={i + 1} />
                ))
            }
        </>
    );
}
