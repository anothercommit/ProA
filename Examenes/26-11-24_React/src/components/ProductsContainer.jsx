import { useState } from "react";
import ProductCard from "./ProductCard.jsx";

export default function ProductsContainer({ products }) {
    const [filter, setFilter] = useState("");

    const handleFilter = (event) => setFilter(event.target.value);

    const filterProducts = () => {
        return filter
            ? products.filter((p) => p.title.toLowerCase().includes(filter))
            : products;
    };

    return (
        <>
            <label htmlFor="filter">Buscar</label>
            <input type="text" id="filter" onChange={handleFilter} />

            <div className="container">
                {filterProducts().map((p, key) => (
                    <ProductCard product={p} key={key} />
                ))}
            </div>
        </>
    );
}
