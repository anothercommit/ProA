import React, { useEffect, useState } from 'react';
import Card from "./components/Card";
import Contador from './components/Contador';

export default function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=6")
            .then(res => res.json())
            .then(json => setProducts(json))
    }, []);

    return (
        <>
            <Contador />
            {
                products.map(p => (
                    <Card key={p.id} product={p} />
                ))
            }
        </>
    );
}
