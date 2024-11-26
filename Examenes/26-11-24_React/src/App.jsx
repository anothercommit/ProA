// Categories
// ["electronics","jewelery","men's clothing","women's clothing"]

import { useState } from "react";
import myAxios from "./myAxios.js";

// <Modules>
import ProductsContainer from "./components/ProductsContainer.jsx";
import Category from "./components/Category.jsx";

function App() {
    const [products, setProducts] = useState([]);

    const handleCategory = (category) => {
        myAxios
            .get(`${category}?limit=10`)
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    };

    return (
        <>
            <Category handler={handleCategory} />
            {/* que nombres mejores podria poner para que no sean tan redundantes?*/}
            {products.length ? (
                <ProductsContainer products={products} />
            ) : (
                <h1>No ha seleccionado una categoría</h1>
            )}
        </>
    );
}

export default App;
