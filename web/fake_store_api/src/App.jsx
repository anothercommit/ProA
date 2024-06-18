import React, { useEffect, useState } from 'react';
import Card from "./components/Card";

export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/1")
            .then(res => res.json())
            .then(json => setData(json))
    }, []);

    console.log(data)

    return (
        <Card key={data.id} title={data.title} price={data.price} image={data.image} />
    );
}
